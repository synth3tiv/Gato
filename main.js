let turno = false;
let victoria = false;

const handleClick = (event) => {
  const { id } = event.target;
  const div = document.getElementById(id);

  if (div.innerText === "" && victoria === false) {
    div.innerText = turno ? "O" : "X";
    verificaVictoria();
    turno = !turno;
  }
};

const verificaVictoria = () => {
  const div1 = document.getElementById(1);
  const div2 = document.getElementById(2);
  const div3 = document.getElementById(3);
  const div4 = document.getElementById(4);
  const div5 = document.getElementById(5);
  const div6 = document.getElementById(6);
  const div7 = document.getElementById(7);
  const div8 = document.getElementById(8);
  const div9 = document.getElementById(9);

  const forma1 =
    div1.innerText === div2.innerText &&
    div1.innerText === div3.innerText &&
    div1.innerText !== "";

  const forma2 =
    div4.innerText === div5.innerText &&
    div4.innerText === div6.innerText &&
    div4.innerText !== "";

  const forma3 =
    div7.innerText === div8.innerText &&
    div7.innerText === div9.innerText &&
    div7.innerText !== "";

  const forma4 =
    div1.innerText === div4.innerText &&
    div1.innerText === div7.innerText &&
    div1.innerText !== "";

  const forma5 =
    div2.innerText === div5.innerText &&
    div2.innerText === div8.innerText &&
    div2.innerText !== "";

  const forma6 =
    div3.innerText === div6.innerText &&
    div3.innerText === div9.innerText &&
    div3.innerText !== "";

  const forma7 =
    div1.innerText === div5.innerText &&
    div1.innerText === div9.innerText &&
    div1.innerText !== "";

  const forma8 =
    div3.innerText === div5.innerText &&
    div3.innerText === div7.innerText &&
    div3.innerText !== "";

  if (forma1 || forma2 || forma3 || forma4 || forma5 || forma6 || forma7 || forma8) {
    victoria = true;
    alert("Ganaste!");
  }
}