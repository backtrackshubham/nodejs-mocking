# !/bin/bash

run_process() {
    local DIR_TO_CHECK='/Volumes/shubham/SHUBHAM/mega-download'
    local MEGA_JAR_PATH=''
    ls $DIR_TO_CHECK
    if [ $? -ne 0 ]
    then
        echo "Download directory doesn't exists; Exiting............"
    else
        warp-cli connect
        java -jar $MEGA_JAR_PATH &
        local MEGA_PID=$!

        local OLD=0
        local NEW=1

        while [ $OLD != $NEW ]
        do
            OLD=$NEW
            sleep 60;
            NEW=$(du -s $DIR_TO_CHECK | awk '{print $1}')
        done
        kill -9 $MEGA_PID
        warp-cli disconnect
        run_process
    fi
}
