// script.js
/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const confirmation = document.getElementById('confirmation');
    const sendAnotherBtn = document.getElementById('sendAnother');
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            instagram: formData.get('instagram'),
            message: formData.get('message'),
            anonymous: formData.get('anonymous')
        };
        
        // Basic validation
        if (!data.email || !data.instagram || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Instagram username validation (remove @ if present)
        if (data.instagram.startsWith('@')) {
            data.instagram = data.instagram.substring(1);
        }
        
        // Simulate sending (in real app, you'd send to your backend)
        console.log('Form data:', data);
        
        // Show confirmation
        showConfirmation();
    });
    
    // Handle "Send Another" button
    sendAnotherBtn.addEventListener('click', function() {
        showForm();
        form.reset();
    });
    
    // Show confirmation screen
    function showConfirmation() {
        form.style.display = 'none';
        confirmation.classList.remove('hidden');
        
        // Add entrance animation
        confirmation.style.opacity = '0';
        confirmation.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            confirmation.style.transition = 'all 0.5s ease';
            confirmation.style.opacity = '1';
            confirmation.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Show form screen
    function showForm() {
        confirmation.classList.add('hidden');
        form.style.display = 'block';
        
        // Add entrance animation
        form.style.opacity = '0';
        form.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            form.style.transition = 'all 0.5s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Add some interactive effects
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add hover glow effect to send button
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    sendBtn.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
    
    // Add typing effect to tagline (optional enhancement)
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    
    function typeWriter(text, element, speed = 50) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
    
    // Uncomment the line below if you want the typing effect on page load
    // typeWriter(originalText, tagline, 30);
});*/

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('ZIW3y4PjFh1yZ8MI2'); // Replace with your EmailJS public key
    
    const form = document.getElementById('messageForm');
    const confirmation = document.getElementById('confirmation');
    const sendAnotherBtn = document.getElementById('sendAnother');
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            instagram: formData.get('instagram'),
            message: formData.get('message'),
            anonymous: formData.get('anonymous')
        };
        
        // Basic validation
        if (!data.email || !data.instagram || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Instagram username validation (remove @ if present)
        if (data.instagram.startsWith('@')) {
            data.instagram = data.instagram.substring(1);
        }
        
        // Show loading state
        const sendBtn = form.querySelector('.send-btn');
        const originalText = sendBtn.textContent;
        sendBtn.textContent = 'Sending...';
        sendBtn.disabled = true;
        
        // Prepare email template parameters
        const templateParams = {
            customer_email: data.email,
            instagram_username: data.instagram,
            message_content: data.message,
            identity_preference: data.anonymous === 'anonymous' ? 'Stay Anonymous' : 'Include Name',
            submission_date: new Date().toLocaleString(),
            to_email: 'ferketox@gmail.com' // Replace with your email
        };
        
        // Send email using EmailJS
        emailjs.send('service_delqyd5', 'template_ybulsq8', templateParams)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                showConfirmation();
            })
            .catch(function(error) {
                console.error('Email send failed:', error);
                alert('Sorry, there was an error sending your message. Please try again.');
            })
            .finally(function() {
                // Reset button state
                sendBtn.textContent = originalText;
                sendBtn.disabled = false;
            });
    });
    
    // Handle "Send Another" button
    sendAnotherBtn.addEventListener('click', function() {
        showForm();
        form.reset();
    });
    
    // Show confirmation screen
    function showConfirmation() {
        form.style.display = 'none';
        confirmation.classList.remove('hidden');
        
        // Add entrance animation
        confirmation.style.opacity = '0';
        confirmation.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            confirmation.style.transition = 'all 0.5s ease';
            confirmation.style.opacity = '1';
            confirmation.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Show form screen
    function showForm() {
        confirmation.classList.add('hidden');
        form.style.display = 'block';
        
        // Add entrance animation
        form.style.opacity = '0';
        form.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            form.style.transition = 'all 0.5s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Add some interactive effects
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add hover glow effect to send button
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    sendBtn.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
    
    // Add typing effect to tagline (optional enhancement)
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    
    function typeWriter(text, element, speed = 50) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
    
    // Uncomment the line below if you want the typing effect on page load
    // typeWriter(originalText, tagline, 30);
});