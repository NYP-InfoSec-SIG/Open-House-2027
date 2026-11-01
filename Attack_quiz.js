    let key = [3, 5, 11, 16, 18]
    function verify() {
        let score = 0
        for (i of key) {
            if (document.querySelector('#ans' + i).checked) {
                score += 1
            }

        }
        if (score == 5) {
            window.location.replace('feedback.html')
        } else {
            document.getElementById('fail').innerHTML = 'Sorry, not every question was answered correctly, please try again.'
        }
    }
