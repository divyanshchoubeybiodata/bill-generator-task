import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    ArticleCode: "ART0001",
    Description: "SPINNER LEMON 150ML",
    UOM: "150ml",
    RateUnit: 4.54,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0002",
    Description: "CAMPA COLA 1L PET",
    UOM: "1000ml",
    RateUnit: 396,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0003",
    Description: "CAMPA LEMON 1L PET",
    UOM: "1000ml",
    RateUnit: 396,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0004",
    Description: "CAMPA ORANGE 1L PET",
    UOM: "1000ml",
    RateUnit: 396,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0005",
    Description: "CAMPA COLA FLVRD DRINK 2L PET",
    UOM: "2000ml",
    RateUnit: 585,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0006",
    Description: "CAMPA LEMON FLVRD DRINK 2L PET",
    UOM: "2000ml",
    RateUnit: 585,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0007",
    Description: "CAMPA ORANGE FLV 2L PET",
    UOM: "2000ml",
    RateUnit: 585,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0008",
    Description: "CAMPA COLA 200ml PET - 30PK",
    UOM: "200ml",
    RateUnit: 235,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0009",
    Description: "CAMPA COLA 200ml PET PMX",
    UOM: "200ml",
    RateUnit: 235,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0010",
    Description: "CAMPA LEMON 200ml PET",
    UOM: "200ml",
    RateUnit: 235,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0011",
    Description: "CAMPA ORANGE FLVRD DRINK 200ML PET",
    UOM: "200ml",
    RateUnit: 235,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0012",
    Description: "Campa Power Up 200ml PET",
    UOM: "200ml",
    RateUnit: 235,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0013",
    Description: "CAMPA CLUB SODA 500ml PET",
    UOM: "500ml",
    RateUnit: 250.2,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0014",
    Description: "CAMPA COLA FLVRD DRINK 500ml PET",
    UOM: "500ml",
    RateUnit: 357.6,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0015",
    Description: "CAMPA LEMON FLVRD DRINK 500ml PET",
    UOM: "500ml",
    RateUnit: 357.6,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0016",
    Description: "CAMPA ORANGE FLVRD DRINK 500ml PET",
    UOM: "500ml",
    RateUnit: 357.6,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0017",
    Description: "Campa Power Up 500ml PET",
    UOM: "500ml",
    RateUnit: 357.6,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0018",
    Description: "CAMPA ENERGY BERRY KICK PP 185ML CAN",
    UOM: "Can 185ml",
    RateUnit: 592.8,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0019",
    Description: "CAMPA ENERGY GOLD BOOST CBC 185ML CAN",
    UOM: "Can 185ml",
    RateUnit: 604.8,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0020",
    Description: "CAMPA COLA 185ML CAN",
    UOM: "Can 185ml",
    RateUnit: 416.16,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0021",
    Description: "CAMPA LEMON 185ML CAN",
    UOM: "Can 185ml",
    RateUnit: 416.16,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0022",
    Description: "CAMPA ORANGE 185ML CAN",
    UOM: "Can 185ml",
    RateUnit: 416.16,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0023",
    Description: "Campa Power Up 185ML CAN",
    UOM: "Can 185ml",
    RateUnit: 416.16,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0024",
    Description: "CAMPA POWER UP CRBNTD DRNK 200ML CAN",
    UOM: "200ml",
    RateUnit: 235,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0025",
    Description: "CAMPA ENERGY GOLD BOOST 330ML CAN",
    UOM: "Can 330ml",
    RateUnit: 842.4,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0026",
    Description: "CAMPA COLA ZERO 330ML CAN",
    UOM: "Can 330ml",
    RateUnit: 1172,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0027",
    Description: "CAMPA COLA 330ML CAN",
    UOM: "Can 330ml",
    RateUnit: 1172,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0028",
    Description: "CAMPA LEMON 330ML CAN",
    UOM: "Can 330ml",
    RateUnit: 1172,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0029",
    Description: "CAMPA ORANGE 330ML CAN",
    UOM: "Can 330ml",
    RateUnit: 1172,
    CGST: 14,
    SGST: 14,
    Cess: 12,
  },
  {
    ArticleCode: "ART0030",
    Description: "RASKIK COCONUT WATER 200 ML PET",
    UOM: "Coconut 200ml",
    RateUnit: 942,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0031",
    Description: "CAMPA ENERGY BERRY KICK 150ML PET",
    UOM: "Energy Pet 150ml",
    RateUnit: 202,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0032",
    Description: "CAMPA ENERGY LEMON KICK 150ML PET",
    UOM: "Energy Pet 150ml",
    RateUnit: 202,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0033",
    Description: "CAMPA ENERGY ORANGE KICK 150ML PET",
    UOM: "Energy Pet 150ml",
    RateUnit: 202,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0034",
    Description: "CAMPA ENERGY COLA KICK 150ML PET",
    UOM: "Energy Pet 150ml",
    RateUnit: 202,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0035",
    Description: "INDEPENDENCE CHOCO MILK SHAKE 200ML TPK",
    UOM: "Milk Shake 200ml",
    RateUnit: 840,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0036",
    Description: "INDEPENDENCE VANILLA MLK SHAKE 200ML TPK",
    UOM: "Milk Shake 200ml",
    RateUnit: 840,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0037",
    Description: "RASKIK GLUCO ENERGY 150ML PET",
    UOM: "Raskik 150ml",
    RateUnit: 215,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0038",
    Description: "Raskik Apple Drink 150ml PET",
    UOM: "Raskik 150ml",
    RateUnit: 203,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0039",
    Description: "Raskik Mango Drink 150ml PET",
    UOM: "Raskik 150ml",
    RateUnit: 198,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0040",
    Description: "Raskik Mixed Fruit Drink 150ml PET",
    UOM: "Raskik 150ml",
    RateUnit: 203,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0041",
    Description: "RASKIK Nimbu Paani PET 150ml",
    UOM: "Raskik 150ml",
    RateUnit: 198,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0042",
    Description: "RASKIK Mango Drink 200 ml PET",
    UOM: "Raskik 200ml",
    RateUnit: 264,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0043",
    Description: "RASKIK MANGO BLISS JUICE 500 ML PET",
    UOM: "Raskik 500ml",
    RateUnit: 607,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0044",
    Description: "Raskik Mango Drink 750 ml PET",
    UOM: "Raskik 750ml",
    RateUnit: 648,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0045",
    Description: "RASKIK NIMBU PAANI 125 ML TPK",
    UOM: "Tetra 125ml",
    RateUnit: 264,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0046",
    Description: "INDEPENDENCE PKGD DRINKING WATER 1L PET",
    UOM: "Water 1000ml",
    RateUnit: 80,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0047",
    Description: "INDEPENDENCE MINERALS WATER 1.5L PET",
    UOM: "Water 1500ml",
    RateUnit: 120,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0048",
    Description: "INDEPENDENCE WATER 250ML PET",
    UOM: "Water 250ml",
    RateUnit: 20,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0049",
    Description: "INDEPENDENCE PKGD DRINKING WATER 500ML PET",
    UOM: "Water 500ml",
    RateUnit: 40,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
  {
    ArticleCode: "ART0050",
    Description: "INDEPENDENCE 750ML PET",
    UOM: "Water 750ml",
    RateUnit: 60,
    CGST: 14,
    SGST: 14,
    Cess: 0,
  },
];

const ProductForm = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ Quantity: 1 });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSelect = (product) => {
    setSelectedProduct(product);
    setFormData({ ...product, Quantity: 1 });
    setSearchTerm(product.Description);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault()
    setIsFormSubmitted(true);
  };

  const filteredProducts =
    searchTerm.trim() === ""
      ? []
      : products.filter(
          (p) =>
            p.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.ArticleCode.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const FhandleSelect = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  const calculateTax = (data) => {
    const rate = parseFloat(data.RateUnit) || 0;
    const quantity = parseFloat(data.Quantity) || 0;
    const cgst = parseFloat(data.CGST) || 0;
    const sgst = parseFloat(data.SGST) || 0;
    const cess = parseFloat(data.Cess) || 0;

    const totalTaxPercent = cgst + sgst + cess;
    const taxAmount = (rate * quantity * totalTaxPercent) / 100;
    return taxAmount.toFixed(2);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card p-4 mb-3">
            <div className="d-flex justify-content-between mb-3">
              <h4>Products</h4>{" "}
              <button className="btn btn-dark" onClick={handleAddProduct}>+ Add Product</button>
            </div>

            {/* Inventory Dropdown */}
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Show Inventory Items"
                value={
                  selectedItem
                    ? `${selectedItem.name} - ${selectedItem.price}`
                    : ""
                }
                onClick={() => setShowDropdown(!showDropdown)}
                readOnly
              />

              {showDropdown && (
                <div
                  className="border rounded bg-white shadow position-absolute w-100"
                  style={{
                    zIndex: 1000,
                    maxHeight: "250px",
                    overflowY: "auto",
                  }}
                >
                  <table className="table table-hover table-sm mb-0">
                    <thead className="table-light sticky-top">
                      <tr>
                        <th>Article Code</th>
                        <th>Description</th>
                        <th>UOM</th>
                        <th>Rate/Unit</th>
                        <th>CGST %</th>
                        <th>SGST %</th>
                        <th>Cess %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item) => (
                        <tr
                          key={item.ArticleCode}
                          onClick={() => FhandleSelect(item)}
                          style={{ cursor: "pointer" }}
                        >
                          <td>{item.ArticleCode}</td>
                          <td>{item.Description}</td>
                          <td>{item.UOM}</td>
                          <td>{item.RateUnit}</td>
                          <td>{item.CGST}</td>
                          <td>{item.SGST}</td>
                          <td>{item.Cess}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Product Search */}
            <div className="container mt-4">
              <label className="mb-2">Product Search</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search by Description or ArticleCode"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedProduct(null);
                  setIsFormSubmitted(false);
                }}
              />

              {/* Search Result List */}
              {!selectedProduct && (
                <ul className="list-group mt-2">
                  {filteredProducts.map((product, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={() => handleSelect(product)}
                      style={{ cursor: "pointer" }}
                    >
                      <strong>{product.ArticleCode}</strong> -{" "}
                      {product.Description}
                    </li>
                  ))}
                </ul>
              )}

              {/* Product Details Form */}
              {selectedProduct && !isFormSubmitted && (
                <div className="card mt-4">
                  <div className="card-body">
                    <h5 className="card-title">Product Details</h5>
                    <div className="row">
                      {Object.keys(formData).map((key) => (
                        <div className="col-md-4 mb-3" key={key}>
                          <label className="form-label">{key}</label>
                          <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            className="form-control"
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="btn btn-dark" onClick={handleAddProduct}>
                      + Add Product
                    </button>
                  </div>
                </div>
              )}

              {/* Product Summary Table */}
              {selectedProduct && isFormSubmitted && (
                <div className="card mt-4">
                  <div className="card-body">
                    <h5>Added Product Summary</h5>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          {Object.keys(formData).map((key) => (
                            <th key={key}>{key}</th>
                          ))}
                          <th>Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {Object.values(formData).map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                          <td>{calculateTax(formData)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tax Summary Section */}
          <div className="p-4 border rounded bg-white mb-4">
            <h4>Tax Summary</h4>
            {!isFormSubmitted ? (
              <input
                className="form-control text-center p-4"
                type="text"
                placeholder="No items added to the invoice yet"
                readOnly
              />
            ) : (
              <table className="table table-bordered mt-3">
                <thead>
                  <tr>
                    {Object.keys(formData).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                    <th>Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(formData).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                    <td>{calculateTax(formData)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
