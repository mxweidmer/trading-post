import React from "react"

export function SearchCategory(){
    return(
  // example drop down for now ls
  <div className = "categorydrop col s8 m2">
    <select className="browser-default">
    
    <option value="General">General</option>
    <option value="Books">Books</option>
    <option value="Electronics">Electronics</option>
    <option value="Jewerly">Jewerly</option>
    <option value="Tools">Tools</option>
    <option value="Clothing">Clothing</option>
    <option value="Furniture">Furniture</option>
    <option value="Games">Games</option>
    <option value="Sports Equipment">Sports Equipment</option>
    <option value="Appliances">Appliances</option>
  </select>
  </div>
    )
}
