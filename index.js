document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var colorValue = document.getElementById('colorInput').value;
    
    document.getElementById('headerText').style.color = colorValue;

    document.getElementById('colorInput').value = '';
});
 