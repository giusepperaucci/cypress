pipeline {
    agent any
        
    stages {
        stage('Testing') {
            steps {
                echo "Testing della Applicazione"
                sh "npm i"
                sh "npx cypress run"
            }
        }
    }
}
