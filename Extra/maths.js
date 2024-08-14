// function clk_submit()
// {
//     let decimal = document.getElementById("decimal").value 
//     let formula = document.getElementById("formula").value 
//     let root = document.getElementById("root").value 

//     // let New_Row = "<tr><td>" + task + "</td><td>" + priority + "</td><td>" + favourite + "</td></tr>"

//     // document.querySelector('#create_tr tbody').innerHTML += New_Row;

//     // document.getElementById('taskForm').reset();

    
// }



function f(x, formula) {
    switch (formula) {
      case 'x^2-9x-1=0':
        return x * x - 9 * x - 1;
      case 'x^3-x-11=0':
        return x * x * x - x - 11;
      case 'x^log^x-1.2=0':
        return Math.pow(x, Math.log10(x)) - 1.2;
      default:
        return null;
    }
  }

  function bisection(a, b, formula, decimal) {
    let iterations = [];
    let fa = f(a, formula);
    let fb = f(b, formula);
    if (fa * fb >= 0) {
      alert("Invalid initial guesses");
      return;
    }
    let c = a;
    while ((b - a) >= Math.pow(10, -decimal)) {
      c = (a + b) / 2;
      let fc = f(c, formula);
      iterations.push({ a: a, b: b, c: c, fc: fc });
      if (fc == 0.0)
        break;
      else if (fc * fa < 0)
        b = c;
      else
        a = c;
    }
    return iterations;
  }

  function clk_submit() {
    event.preventDefault();
    let decimal = document.getElementById("decimal").value;
    let formula = document.getElementById("formula").value;
    let root = document.getElementById("root").value;

    if (!decimal || !formula || !root) {
      alert("Please fill in all fields");
      return;
    }

    let a, b;
    if (root === "Positive") {
      a = 0;
      b = 10;
    } else {
      a = -10;
      b = 0;
    }

    let iterations = bisection(a, b, formula, decimal);
    let table = document.getElementById("create_tr").getElementsByTagName('tbody')[0];
    table.innerHTML = ""; // Clear previous results

    iterations.forEach((iteration, index) => {
      let row = table.insertRow();
      row.insertCell(0).innerHTML = index + 1;
      row.insertCell(1).innerHTML = iteration.a.toFixed(decimal);
      row.insertCell(2).innerHTML = iteration.b.toFixed(decimal);
      row.insertCell(3).innerHTML = iteration.c.toFixed(decimal);
      row.insertCell(4).innerHTML = iteration.fc.toFixed(decimal);
    });
  }