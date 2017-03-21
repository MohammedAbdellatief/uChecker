$(document).ready(function() {

    (function() {

        // storing several tests types in an array of objects
        var test = [
            {
                id:0,
                name: 'Technical Check',
                descriptionTitle: 'Currently performing a technical check',
                descriptionBody: 'To know your machine\'s ability of making VOIP calls ',
                message:'Do you know that lorem ipsum dolor sit consetur from adpiscing elit. vel tempor neque. Proin at lorem vitae dolor convet nunc.'
            },
            {
                id:1,
                name: 'Network Test',
                descriptionTitle: 'Currently testing your network',
                descriptionBody: 'To make sure your network is working just fine',
                message:'Do you know that lorem ipsum dolor sit consetur from adpiscing elit.'
            },
            {
                id:2,
                name: 'Client Test',
                descriptionTitle: 'Currently testing your machine',
                descriptionBody: 'To know your machine\'s ability of making VOIP calls',
                message:'Do you know that lorem ipsum dolor sit consetur from adpiscing elit. vel tempor neque. Proin at lorem vitae dolor convet nunc. Do you know that lorem ipsum dolor sit consetur from adpiscing elit. vel tempor neque. Proin at lorem vitae dolor convet nunc dolor convet nunc. Do you know that lorem ipsum dolor sit consetur from adpiscing elit. vel tempor neque. Proin at lorem vitae dolor convet nunc'
            },
            {
                id:3,
                name: 'Call Quality Test',
                descriptionTitle: 'Now testing call quality',
                descriptionBody: 'To make sure you can hear and speak to others',
                message:'Do you know that lorem ipsum dolor sit consetur from adpiscing elit. vel tempor neque. Proin at lorem vitae dolor convet nunc.'
            }
        ];

        // selectors
        var button = $('.btn'),
            progress = $('#progress'),
            progressValue = progress.attr('stroke-dashoffset'),
            progressText = $('#progresstext').text(),
            feedbackIcon = $('.small_icon'),
            feedbackMessage = $('.pupple_content p'),
            currentTestIndex = 0
        ;



        // click start to open test page
        button.on('click', function(){
            setTimeout(function () {
                window.location.href='test.html';
            },300)
        });


         //update percentage value and text
        var timer = setInterval(function () {
            if(progress.length !== 0){
                updateProgress();
            }
        }, 300);

        function updateFeedback(){
            if(currentTestIndex < test.length-1){
                currentTestIndex++;
            }
            feedbackIcon.addClass('change_icon');
            feedbackMessage.addClass('invisible');
            setTimeout(function () {
                feedbackIcon.removeClass().addClass('small_icon');
                feedbackIcon.addClass(((test[currentTestIndex].name).replace(/\s/g,'')+'_icon'));
                feedbackIcon.find('strong').text(test[currentTestIndex].descriptionTitle);
                feedbackIcon.find('span').text(test[currentTestIndex].descriptionBody);
                feedbackMessage.text(test[currentTestIndex].message);
                feedbackMessage.removeClass('invisible');

            },500);
        }

        // init feedback
        feedbackIcon.addClass(((test[currentTestIndex].name).replace(/\s/g,'')+'_icon'));
        feedbackIcon.find('strong').text(test[currentTestIndex].descriptionTitle);
        feedbackIcon.find('span').text(test[currentTestIndex].descriptionBody);
        feedbackMessage.text(test[currentTestIndex].message);

        function updateProgress (){


            if(progressValue < 200){

                //update value
                progressValue++;
                progress.attr('stroke-dashoffset',progressValue);

                //update feedback messages
                if(progressValue == 125){
                    updateFeedback();
                }else if(progressValue === 150){
                    updateFeedback();
                }else if(progressValue === 175){
                    updateFeedback();
                }


                // update text
                progressText = parseInt(progressText) + 1;
                $('#progresstext').text( progressText + '%')


            }else{
                //clear the timer if 100% percent
                clearInterval(timer);
                setTimeout(function () {
                    window.location.href='result.html';
                },1000);
            }


        }






    })();

});