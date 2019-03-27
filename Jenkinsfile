// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any
      tools {nodejs "nodejs"}

    environment {
      CI = 'true'
    }
    stages {
		stage('installDependencies') {
            steps {
				echo 'installing dependencies'
				sh 'npm audit fix'
				sh 'npm install'
            }
        }
        // stage('test') {
        //     steps {
		// 		echo 'running tests'
        //         sh 'npm test'
        //     }
        // }
		stage('build') {
            steps {
				echo 'running build'
                sh 'npm run build'
            }
        }
		stage('start') {
            steps {
				echo 'starting the application'
                sh 'npm start'
            }
        }
    }
}
