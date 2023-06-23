const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  const bills = [22,284,155,234,224,100,1243,66];
  const tips = [];
  const totals = [];

  size = bills.length;
  for (let i = 0; i < size; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
  }
  console.log("tip:" + tips);
  console.log("total: " + totals);