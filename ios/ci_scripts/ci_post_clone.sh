 #!/bin/zsh

 # fail if any command fails

 echo "🧩 Stage: Post-clone is activated .... "

 set -e
 # debug log
 set -x

 # Install dependencies using Homebrew. This is MUST! Do not delete.
 brew install node yarn cocoapods fastlane

 # Install yarn and pods dependencies.
 # If you're using Flutter or Swift 
 # just install pods by "pod install" command 
 ls && cd .. && yarn && pod install

 echo "🎯 Stage: Post-clone is done .... "

 exit 0
