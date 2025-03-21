<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Uzdevumi</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>JavaScript Uzdevumi</h1>
    <script>
        
        let a = 10;
        let b = 5;

        
        console.log("Summa:", a + b);
        console.log("Starpība:", a - b);
        console.log("Reizinājums:", a * b);
        console.log("Dalījums:", a / b);
        console.log("a pakāpē b:", a ** b);
        console.log("a dalījuma atlikums dalot ar b:", a % b);

       
        if (a > b) {
            console.log("a ir lielāks par b");
        } else if (a === b) {
            console.log("a ir vienāds ar b");
        } else {
            console.log("b ir lielāks par a");
        }

        // Alternatīva salīdzināšanas konstrukcija
        switch (true) {
            case a > b:
                console.log("a ir lielāks par b");
                break;
            case a === b:
                console.log("a ir vienāds ar b");
                break;
            default:
                console.log("b ir lielāks par a");
        }

        // Masīvs ar 10 vērtībām
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log("Masīvs:", array);
    </script>
</body>
</html>
