pipeline {
    agent any

    stages {
        stage('Deploy PYTHON project') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'voiceassistant',
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        cleanRemote: false,
                                        excludes: '',
                                        execTimeout: 120000,
                                        flatten: false,
                                        makeEmptyDirs: false,
                                        noDefaultExcludes: false,
                                        patternSeparator: '[, ]+',
                                        remoteDirectory: '',
                                        remoteDirectorySDF: false,
                                        removePrefix: '',
                                        sourceFiles: '**/*',
                                        execCommand: '')], 
                                usePromotionTimestamp: false, 
                                useWorkspaceInPromotion: false)])
                }
            }
        }
    }
}
