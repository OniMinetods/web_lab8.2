function mainTask() {
  let var1 = prompt('var1:', '0');
  let var2 = prompt('var2:', 9999999999999n);
  let var3 = prompt('var3:', 'true');
  let var4 = prompt('var4:', 'word');
  document.getElementById('text1').value = var1;
  document.getElementById('text2').value = var2;
  document.getElementById('text3').value = var3;
  document.getElementById('text4').value = var4;

  var1 = Number(var1);
  var2 = 99999999999999999999n;
  var3 = Boolean(var3);
  var4 = String(var4);

  alert(
    `Значение var1 = ${var1}, тип: ${typeof var1}\n` +
      `Значение var2 = ${var2}, тип: ${typeof var2}\n` +
      `Значение var3 = ${var3}, тип: ${typeof var3}\n` +
      `Значение var4 = ${var4}, тип: ${typeof var4}\n`,
  );
}

function task5() {
  let a = Number(prompt('Введите коэффициент A:', '1'));
  let b = Number(prompt('Введите коэффициент B', '1'));
  let c = Number(prompt('Введите коэффициент C:', '1'));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Ошибка: Введите корректные числовые коэффициенты!');
    return;
  }

  document.getElementById('textA').value = a;
  document.getElementById('textB').value = b;
  document.getElementById('textC').value = c;

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    alert(
      `Уравнение ${a}x\u00B2 + ${b}x + ${c} = 0 не имеет действительных корней.`,
    );
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    alert(
      `Корни уравнения ${a}x\u00B2 + ${b}x + ${c} = 0:\n` +
        `x1 = ${x1}\n` +
        `x2 = ${x2}`,
    );
  }
}

function task6() {
  document.getElementById('textFor').value = '';
  document.getElementById('textWhile').value = '';
  document.getElementById('textDoWhile').value = '';
  let loop = document.getElementsByClassName('loop')[0].checked
    ? document.getElementsByClassName('loop')[0].value
    : document.getElementsByClassName('loop')[1].checked
    ? document.getElementsByClassName('loop')[1].value
    : document.getElementsByClassName('loop')[2].value;
  let count = 0;
  switch (loop) {
    case 'for':
      for (; count < 10; count++) {
        document.getElementById('textFor').value =
          document.getElementById('textFor').value + ' ' + count;
      }
      break;
    case 'while':
      while (count < 10) {
        document.getElementById('textWhile').value =
          document.getElementById('textWhile').value + ' ' + count;
        count++;
      }
      break;
    default:
      do {
        document.getElementById('textDoWhile').value =
          document.getElementById('textDoWhile').value + ' ' + count;
        count++;
      } while (count < 10);
      break;
  }
}

function task7() {
  switch (document.getElementById('selectWeather').value) {
    case document.getElementById('selectWeather')[0].value:
      alert('Вам следует надеть кепку!');
      break;
    case document.getElementById('selectWeather')[1].value:
      alert('Вам следует надеть дождевик!');
      break;
    case document.getElementById('selectWeather')[2].value:
      alert('Вам следует надеть шубу!');
      break;
    case document.getElementById('selectWeather')[3].value:
      alert('Вам следует надеть ветровку!');
      break;
    default:
      alert('Можете ничего не брать с собой)');
  }
}
