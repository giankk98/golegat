    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            const alerts = document.querySelectorAll('.alert-message');
            alerts.forEach(alert => {
                alert.classList.add('fade-out');
                alert.addEventListener('animationend', () => {
                    alert.style.display = 'none';
                });
            });
        }, 5000); // Ocultar las alertas después de 5 segundos
    
        const analyzeForm = document.getElementById('analyze-form');
        if (analyzeForm) {
            analyzeForm.addEventListener('submit', function() {
                document.getElementById('loading').style.display = 'flex';
            });
        }
    });    
