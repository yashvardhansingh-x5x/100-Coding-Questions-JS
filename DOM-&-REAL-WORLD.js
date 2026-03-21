// Button click counter - Done
<!DOCTYPE html>
<html>
<head>
  <title>Click Counter</title>
</head>
<body>

  <button onclick="countClick()">Click Me</button>
  <p>Count: <span id="count">0</span></p>

  <script>
    let counter = 0;

    function countClick() {
      counter++;
      document.getElementById("count").innerText = counter;
    }
  </script>

</body>
</html>

// Input se text print karo - Done
<!DOCTYPE html>
<html>
<head>
  <title>Input Print</title>
</head>
<body>

  <input type="text" id="inputBox" placeholder="Type something">
  <button onclick="printText()">Show</button>

  <p id="output"></p>

  <script>
    function printText() {
      let text = document.getElementById("inputBox").value;
      document.getElementById("output").innerText = text;
    }
  </script>

</body>
</html>