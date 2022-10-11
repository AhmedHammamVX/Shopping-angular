import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit {

  priceSections: Array<any> = [{ title: "All Price"}, { title: "$0 - $100", count: 0 }, { title: "$100 - $200", count: 0 }, { title: "$200 - $300", count: 0 }, { title: "$300 - $400", count: 0 }, { title: "$400 - $500", count: 0 }];
  colorSections: Array<any> = [{ title: "All Color"}, { title: "Black", count: 0 }, { title: "White", count: 0 }, { title: "Red", count: 0 }, { title: "Blue", count: 0 }, { title: "Green", count: 0 }];
  sizeSections: Array<any> = [{ title: "All Size"}, { title: "XS", count: 0 }, { title: "S", count: 0 }, { title: "M", count: 0 },{ title: "L", count: 0 }, { title: "XL", count: 0 }];
  priceForm: FormGroup;
  colorForm: FormGroup;
  sizeForm: FormGroup;
  allProducts: Array<any> = [];
  resultFilter = new Set<any>([]);
  priceFilter = new Set<any>([]);
  colorFilter = new Set<any>([]);
  sizeFilter = new Set<any>([]);
  showingNumber:number=10;
  pageCount:number=Math.ceil(this.allProducts.length/this.showingNumber);

  constructor(private fb: FormBuilder) {
    this.priceForm = fb.group({
      selectedPrices: new FormArray([new FormControl("All Price")]),
    });
    this.colorForm = fb.group({
      selectedColors: new FormArray([new FormControl("All Color")]),
    });
    this.sizeForm = fb.group({
      selectedSizes: new FormArray([new FormControl("All Size")]),
    });

    this.allProducts = JSON.parse(localStorage.getItem("allProducts") || '{}');
    this.allProducts.forEach((p) => {
      this.resultFilter.add(p.id);
      this.priceFilter.add(p.id);
      this.colorFilter.add(p.id);
      this.sizeFilter.add(p.id);

      if (p.price > 0 && p.price < 100) {
        this.priceSections[1].count++;
      } else if (p.price > 100 && p.price < 200) {
        this.priceSections[2].count++;
      } else if (p.price > 200 && p.price < 300) {
        this.priceSections[3].count++;
      } else if (p.price > 300 && p.price < 400) {
        this.priceSections[4].count++;
      } else if (p.price > 400 && p.price < 500) {
        this.priceSections[5].count++;
      }

      switch (p.size) {
        case 'XS':
          this.sizeSections[1].count++;
          break;
        case 'S':
          this.sizeSections[2].count++;
          break;
        case 'M':
          this.sizeSections[3].count++;
          break;
        case 'L':
          this.sizeSections[4].count++;
          break;
        case 'XL':
          this.sizeSections[5].count++;
          break;
      }

      switch (p.color) {
        case 'black' :
          this.colorSections[1].count++;
          break;
        case 'white':
          this.colorSections[2].count++;
          break;
        case 'red':
          this.colorSections[3].count++;
          break;
        case 'blue':
          this.colorSections[4].count++;
          break;
        case 'green':
          this.colorSections[5].count++;
          break;
      }
    })
  }

  ngOnInit(): void {
  }

  onPriceFilterChange(event: any) {
    const selectedPrices = (this.priceForm.controls['selectedPrices'] as FormArray);
    if (event.target.checked) {
      selectedPrices.push(new FormControl(event.target.id));
    } else {
      const index = selectedPrices.controls
        .findIndex(x => x.value === event.target.id);
      selectedPrices.removeAt(index);
    }
    this.filter("price");
  }

  onColorFilterChange(event: any) {
    const selectedColors = (this.colorForm.controls['selectedColors'] as FormArray);
    if (event.target.checked) {
      selectedColors.push(new FormControl(event.target.id));
    } else {
      const index = selectedColors.controls
        .findIndex(x => x.value === event.target.id);
      selectedColors.removeAt(index);
    }
    this.filter("color");
  }

  onSizeFilterChange(event: any) {
    const selectedSizes = (this.sizeForm.controls['selectedSizes'] as FormArray);
    if (event.target.checked) {
      selectedSizes.push(new FormControl(event.target.id));
    } else {
      const index = selectedSizes.controls
        .findIndex(x => x.value === event.target.id);
      selectedSizes.removeAt(index);
    }
    this.filter("size");
  }

  filter(key:string) {
    this.resultFilter.clear();
    switch (key) {
      case "price":
        let seletedP = new Set(this.priceForm.get("selectedPrices")?.value);
        if (seletedP.has("All Price") || seletedP.size==0) {
           this.priceFilter.clear();
           this.allProducts.forEach(product=>this.priceFilter.add(product.id));
        }else{
          this.priceFilter.clear()
          this.allProducts.forEach((product) => {
            if (seletedP.has("$0 - $100") && product.price > 0 && product.price < 100) {
              this.priceFilter.add(product.id);
            }
            else if (seletedP.has("$100 - $200") && product.price>100 && product.price<200) {
              this.priceFilter.add(product.id);
            }
            else if (seletedP.has("$200 - $300") && product.price > 200 && product.price < 300) {
              this.priceFilter.add(product.id);
            }
            else if (seletedP.has("$300 - $400") && product.price > 300 && product.price < 400) {
              this.priceFilter.add(product.id);
            }
            else if (seletedP.has("$400 - $500") && product.price > 400 && product.price < 500) {
              this.priceFilter.add(product.id);
            }

          })
        }
        break;
      case "color":
        let selectedC = new Set(this.colorForm.get("selectedColors")?.value);
        if (selectedC.has("All Color") || selectedC.size==0 ) {
          this.colorFilter.clear();
          this.allProducts.forEach(product=>this.colorFilter.add(product.id));
       }else{
          this.colorFilter.clear();
          this.allProducts.forEach((product) => {
            if (selectedC.has("Red") && product.color == "red") {
              this.colorFilter.add(product.id);
            }
            else if (selectedC.has("Green") && product.color == "green") {
              this.colorFilter.add(product.id);
            }
            else if (selectedC.has("Blue") && product.color == "blue") {
              this.colorFilter.add(product.id);
            }
            else if (selectedC.has("White") && product.color == "white") {
              this.colorFilter.add(product.id);
            }
            else if (selectedC.has("Black") && product.color == "black") {
              this.colorFilter.add(product.id);
            }
          })
        }
        break;
      case "size":
        let selectedS = new Set(this.sizeForm.get("selectedSizes")?.value);
        if (selectedS.has("All Size") || selectedS.size==0) {
          this.sizeFilter.clear();
          this.allProducts.forEach(product=>this.sizeFilter.add(product.id));
       }else{
          this.sizeFilter.clear();
          this.allProducts.forEach((product) => {
            if (selectedS.has("XS") && product.size == "XS") {
              this.sizeFilter.add(product.id);
            }
            else if (selectedS.has("S") && product.size == "S") {
              this.sizeFilter.add(product.id);
            }
            else if (selectedS.has("M") && product.size == "M") {
              this.sizeFilter.add(product.id);
            }
            else if (selectedS.has("L") && product.size == "L") {
              this.sizeFilter.add(product.id);
            }
            else if (selectedS.has("XL") && product.size == "XL") {
              this.sizeFilter.add(product.id);
            }
          });
        
        }
        break;

    }

    this.priceFilter.forEach((pid) => {
      if (this.colorFilter.has(pid) && this.sizeFilter.has(pid)) {
        this.resultFilter.add(pid);
      }
    });
      console.log("result of filter = ", this.resultFilter);
  }

  changeShowing(num:number){
    this.showingNumber=num;
    this.pageCount=Math.ceil(this.resultFilter.size/this.showingNumber);
  }
}