// form

(function() {
  	const inputs = document.querySelectorAll('.form-input'),
		checkboxes = document.querySelectorAll('input[type="checkbox"]'),
		send = document.querySelector('.form-btn'),
		reset = document.querySelector('.form-btn-reset');
  	let toggle1,
      	toggle2;

  	const allElements = [...Array.from(inputs), ...Array.from(checkboxes)];

  	const checkForm2 = () => {
      	if(checkboxes[0].checked || checkboxes[1].checked) {
          	toggle2 = true;
      	} else {
        	toggle2 = false;
      	};

    for (let i = 0; i < inputs.length; i++) {
		if(inputs[i].value !== '') {
		toggle2 = true;
      	} 
    };

    if(toggle2) {
      	reset.classList.add('form-btn-reset-active');
    } else {
      	reset.classList.remove('form-btn-reset-active');
    };
};

  	const checkForm = () => {
      	if(checkboxes[0].checked || checkboxes[1].checked) {
          	toggle1 = true;
      	} else {
          	toggle1 = false;
      	};

    for (let i = 0; i < inputs.length; i++) {
      	if(inputs[i].value !== '') {
          	toggle1 = true;
      	} else {
          	toggle1 = false;
      	};
    };

		if(toggle1) {
			send.classList.add('form-btn-send');
		} else {
			send.classList.remove('form-btn-send');
		};
  	};

  	for (let i = 0; i < allElements.length; i++) {
		allElements[i].addEventListener('change', checkForm);
		allElements[i].addEventListener('change', checkForm2);
  	};

  	const validateFrom = evt => {
      	evt.preventDefault();
		if (!toggle1) {
			for (let i = 0; i < inputs.length; i++) {
			if(inputs[i].value == '') {
				inputs[i].classList.add('form-input-invalid');
			} else {
				inputs[i].classList.remove('form-input-invalid');
			}
		};
		  
      	if(!checkboxes[0].checked && !checkboxes[1].checked) {
			checkboxes.forEach( elem => {
			console.log(elem)
			elem.classList.add('checkbox-invalid')
        }
        );
      } else {
			checkboxes.forEach( elem => {
			elem.classList.add('checkbox-invalid')
        }
        );
      };
    };
  };

  	// send.addEventListener('click', evt => validateFrom(evt));
})();


