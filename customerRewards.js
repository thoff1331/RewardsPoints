import { React, Component } from "react";

function customerRewards(total) {
  if (total >= 50 && total < 100) {
    return (total = 50);
  } else if (total > 100) {
    return 2 * (total - 100) + 50;
  } else {
    return 0;
  }
}
class Purchase {
  constructor(total) {
    this.total = total;
    this.rewardsPoints = customerRewards(total);
    this.dateOfPurchase = new Date();
  }
}

class allPurchases {
  constructor(props) {
    this.listOfPurchases = [];
  }
  lastThreeMonthsPurchases() {
    let getDate = new Date();
    let lastThreeMonthsDate = getDate.setMonth(getDate.getMonth() - 3);
    let sortedList = this.listOfPurchases(purchase => purchase.dateOfPurchase > lastThreeMonthsDate
    );
    return sortedList.sort((x, y) => x.dateOfPurchase - y.dateOfPurchase);
  }
  getAllPurchases() {
    return this.listOfPurchases.sort((x, y) => y.dateOfPurchase - x.dateOfPurchase
    );
  }
  addPurchase(total) {
    const purchase = new Purchase(total);
    this.listOfPurchases.push(purchase);
  }
  getRewardsTotal() {
    if (this.listOfPurchases.length) {
    return this.listOfPurchases.reduce((acc, key) => key.rewardsPoints + acc,0);
    } else return 0;
  }
  rewardsPointsPerMonth() {
    rewardsFromLastThreeMonths = [];
    for (let j = 0; j <= 3; j++) {
    let sortedList = this.listOfPurchases.filter(
    purchase => purchase.dateOfPurchase.getMonth() === new Date().getMonth() - j  );
    rewardsFromLastThreeMonths[j] = sortedList.reduce((acc, key) => key.rewardsPoints + acc,0);
    }
    return rewardsFromLastThreeMonths;
  }
}
let purchases = new allPurchases();
 purchases.addPurchase(215);
 purchases.addPurchase(1000);
 purchases.addPurchase(66);
 purchases.addPurchase(189);
 purchases.addPurchase(1313);
 purchases.addPurchase(51);
 purchases.addPurchase(900);

let viewAllPurchases = purchases.getAllPurchases();


