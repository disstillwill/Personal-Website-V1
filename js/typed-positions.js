
    $(function () {
        $(".position-text").typed({
            strings: ["Software Engineer", "Princeton Student", "Hiking Enthusiast", "Coffee Lover", "Amateur Webdev"],
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 500,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () {
            },
            // starting callback function before each string
            preStringTyped: function () {
            },
            //callback for every typed string
            onStringTyped: function () {
            },
            // callback for reset
            resetCallback: function () {
            }
        });
    });