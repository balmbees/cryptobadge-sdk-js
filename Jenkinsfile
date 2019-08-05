pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      label 'Small'
    }
  }

  environment {
    HOME = './'
  }

  stages {
    stage('Start') {
      environment {
        NPM_TOKEN = credentials("NPM-Vingle-Bot-Token")
      }
      steps {
        checkout scm

        // Setup NPM
        sh "echo \"//registry.npmjs.org/:_authToken=$NPM_TOKEN\" > .npmrc"
      }
    }

    stage('Prepare') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage("Publish") {
      when {
        branch 'master'
      }
      environment {
        GH_TOKEN = credentials("GitWebhook")
      }
      steps {
        sh 'npx semantic-release'
      }
    }
  }

  post {
    regression {
      slackSend channel: '#st-web', color: 'danger', message: "${env.JOB_NAME} Regressed"
    }
    fixed {
      slackSend channel: '#st-web', color: 'good', message: "${env.JOB_NAME} Fixed"
    }
  }
}
