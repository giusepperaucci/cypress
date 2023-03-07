pipeline {
    agent any
    parameters {
        string(name: 'SCRIPT', defaultValue: 'cypress/e2e/**/**', description: 'Script da eseguire. Il valore di Default esegue tutto quello presente nella directory e2e')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Browser su cui si vuole eseguire lo script')
    }
    
    stages {
        
        stage('Building'){
            steps {
                echo "Building della Applicazione"
            }
        }
        
        stage('Testing') {
            steps {
                echo "Testing della Applicazione"
                //bat "npm i"
                //bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                sh "npm i"
                //sh "npx cypress run --browser ${BROWSER} --spec ${SCRIPT}"
                sh "npx cypress run"
            }
        }
        
        stage('Deploying'){
            steps {
                echo "Deploying della Applicazione"
            }
        }
    }

    post {
        always {
            echo "Pubblicazione Report HTML"
            //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            //deleteDir()
        }
    }
}
