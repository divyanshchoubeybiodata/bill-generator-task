import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import html2pdf from "html2pdf.js";

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

function App() {
  const [Companyname, setCompanyname] = useState("BUNDELKHAND TRADERS");
  const [GSTIN, setGSTIN] = useState("09ABEPH7258N1Z3");
  const [StateCode, setStateCode] = useState("09");
  const [State, setState] = useState("Uttar Pradesh");
  const [FSSAI, setFSSAI] = useState("22724219000226");
  const [PPB, setPPB] = useState(
    "WARD NO 11 HAIDARIYA KAPSA ROAD HAIDARIYA MAUDAHA, Hamirpur, Uttar Pradesh - 210507"
  );
  const [SDL, setSDL] = useState(
    "WARD NO 11 HAIDARIYA KAPSA ROAD HAIDARIYA MAUDAHA, Hamirpur, Uttar Pradesh - 210507"
  );
  const [SA, setSA] = useState("HAMIRPUR");
  const [SDC, setSDC] = useState("80IJY");
  const [InvoiceNumber, setInvoiceNumber] = useState("2025BT0001");
  const [InvoiceDate, setInvoiceDate] = useState("15.07.2025");
  const [Name, setName] = useState("");
  const [AddressL1, setAddressL1] = useState("");
  const [AddressL2, setAddressL2] = useState("");
  const [AddressL3, setAddressL3] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [CStateCode, setCStateCode] = useState("");
  const [CGSTIN, setCGSTIN] = useState("");
  const [OrderInfo, setOrderInfo] = useState("");
  const [PaymentTerms, setPaymentTerms] = useState("");
  const [DeliveryTerms, setDeliveryTerms] = useState("");
  const [POS, setPOS] = useState("");
  const [SName, setSName] = useState("")
  const [SContactNo, setSContactNo] = useState("")

  const [isBillGenerated, setIsBillGenerated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ Quantity: 1 });
  const [cart, setCart] = useState([]); // Store multiple added products

  const invoiceRef = useRef();

  // Download PDF
  const handleDownload = () => {
    const element = invoiceRef.current;
    html2pdf().from(element).save("invoice.pdf");
  };

  // Print
  const handlePrint = () => {
    const printContents = invoiceRef.current.innerHTML;
    const newWindow = window.open("", "", "width=900,height=900");
    newWindow.document.write(`
        <html>
          <head>
            <title>Invoice Print</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            <style>
              body { padding: 20px; }
            </style>
          </head>
          <body>
            ${printContents}
          </body>
        </html>
      `);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  };

  function HandleGenerateBtn(e){
    e.preventDefault()
    setIsBillGenerated(true)
  }

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
    e.preventDefault();
    setCart([...cart, formData]);
    setSelectedProduct(null);
    setFormData({ Quantity: 1 });
    setSearchTerm("");
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
    return parseFloat(taxAmount.toFixed(2));
  };

  const calculateBaseValue = (data) => {
    const rate = parseFloat(data.RateUnit) || 0;
    const quantity = parseFloat(data.Quantity) || 0;
    return parseFloat((rate * quantity).toFixed(2));
  };

  const totalTax = cart
    .reduce((sum, item) => sum + calculateTax(item), 0)
    .toFixed(2);
  const totalBaseValue = cart
    .reduce((sum, item) => sum + calculateBaseValue(item), 0)
    .toFixed(2);
  const totalInvoiceValue = (
    parseFloat(totalTax) + parseFloat(totalBaseValue)
  ).toFixed(2);

  return (
    <>
      <div className="bg-light w-100 h-100">
        <h3 className="text-center pt-4 fw-bolder">Sales Invoice Generator</h3>

        <div className="main mx-5 ">
          <section className="container-fluid mt-4 mx-3">
            <form className="p-4 border rounded bg-white mb-4 ">
              <h4>Company Information</h4>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCompanyname(e.target.value)}
                    value={Companyname}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">GSTIN</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setGSTIN(e.target.value)}
                    value={GSTIN}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">State Code</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setStateCode(e.target.value)}
                    value={StateCode}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setState(e.target.value)}
                    value={State}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">FSSAI License No</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFSSAI(e.target.value)}
                    value={FSSAI}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Principal Place of Bussiness
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPPB(e.target.value)}
                  value={PPB}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Supply/Dispatch Location</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSDL(e.target.value)}
                  value={SDL}
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Supply Area </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSA(e.target.value)}
                    value={SA}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Supply/Dispatch Code</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSDC(e.target.value)}
                    value={SDC}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Telephone</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Invoice Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    value={InvoiceNumber}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Invoice Date</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    value={InvoiceDate}
                  />
                </div>
              </div>
            </form>

            <form className="p-4 border rounded bg-white mb-4 ">
              <h4>Customer Details</h4>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line1</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddressL1(e.target.value)}
                  value={AddressL1}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line2</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddressL2(e.target.value)}
                  value={AddressL2}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line3</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddressL3(e.target.value)}
                  value={AddressL3}
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Contact No.</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setContactNo(e.target.value)}
                    value={ContactNo}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">State Code</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCStateCode(e.target.value)}
                    value={CStateCode}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">GSTIN</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCGSTIN(e.target.value)}
                  value={CGSTIN}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Aadhar Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Order Info</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setOrderInfo(e.target.value)}
                  value={OrderInfo}
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Payment Terms </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPaymentTerms(e.target.value)}
                    value={PaymentTerms}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Delivery Terms</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDeliveryTerms(e.target.value)}
                    value={DeliveryTerms}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Place of Supply</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPOS(e.target.value)}
                  value={POS}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mode of Payment</label>
                <select className="form-select mb-3">
                  <option value="" disabled selected>
                    <b>Select payment mode</b>
                  </option>
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>UPI</option>
                </select>
              </div>

              <h4 className="mb-3">Shipping Details</h4>

              <div className="mb-3">
                <label className="form-label">Transport Name</label>
                <input type="text"  onChange={(e) => setSName(e.target.value)} value={SName} className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Transport Mobile No.</label>
                <input type="text"  onChange={(e) => setSContactNo(e.target.value)} value={SContactNo} className="form-control" />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Vehicle No.</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Consignment Note</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Mode of Transport</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Internal Ref. No.</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">e-Way Bill No.</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </form>

            <form className="p-4 border rounded bg-white mb-4 ">
              <div className="container-fluid mt-4">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="card p-4 mb-3">
                      <div className="d-flex justify-content-between mb-3">
                        <h4>Products</h4>
                        <button
                          className="btn btn-dark"
                          onClick={handleAddProduct}
                          disabled={!selectedProduct}
                        >
                          + Add Product
                        </button>
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
                          }}
                        />

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

                        {selectedProduct && (
                          <div className="card mt-4">
                            <div className="card-body">
                              <h5 className="card-title">Product Details</h5>
                              <div className="row">
                                {Object.keys(formData).map((key) => (
                                  <div className="col-md-4 mb-3" key={key}>
                                    <label className="form-label">{key}</label>
                                    <input
                                      type={
                                        key === "Quantity" ? "number" : "text"
                                      }
                                      name={key}
                                      value={formData[key]}
                                      className="form-control"
                                      onChange={handleChange}
                                    />
                                  </div>
                                ))}
                              </div>
                              <button
                                className="btn btn-dark"
                                onClick={handleAddProduct}
                              >
                                + Add Product
                              </button>
                            </div>
                          </div>
                        )}

                        {cart.length > 0 && (
                          <div className="card mt-4">
                            <div className="card-body">
                              <h5>Added Product Summary</h5>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Sr. No.</th>
                                    {Object.keys(cart[0]).map((key) => (
                                      <th key={key}>{key}</th>
                                    ))}
                                    <th>Tax</th>
                                    <th>Base Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {cart.map((item, idx) => (
                                    <tr key={idx}>
                                      <td>{idx + 1}</td>
                                      {Object.values(item).map((value, i) => (
                                        <td key={i}>{value}</td>
                                      ))}
                                      <td>{calculateTax(item)}</td>
                                      <td>{calculateBaseValue(item)}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 border rounded bg-white mb-4">
                      <h4>Tax Summary</h4>
                      {cart.length === 0 ? (
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
                              <th>Sr. No.</th>
                              {Object.keys(cart[0]).map((key) => (
                                <th key={key}>{key}</th>
                              ))}
                              <th>Tax</th>
                              <th>Base Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((item, idx) => (
                              <tr key={idx}>
                                <td>{idx + 1}</td>
                                {Object.values(item).map((value, i) => (
                                  <td key={i}>{value}</td>
                                ))}
                                <td>{calculateTax(item)}</td>
                                <td>{calculateBaseValue(item)}</td>
                              </tr>
                            ))}
                            <tr className="table-light fw-bold">
                              <td colSpan={Object.keys(cart[0]).length + 1}>
                                Total
                              </td>
                              <td>{totalTax}</td>
                              <td>{totalBaseValue}</td>
                            </tr>
                            <tr className="table-success fw-bold">
                              <td
                                colSpan={Object.keys(cart[0]).length + 2}
                                className="text-end"
                              >
                                Total Invoice Value: ₹ {totalInvoiceValue}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </div>

                    <div className="p-4 border rounded bg-white mb-4">
                      <div className="p-4 border rounded bg-white mb-4">
                        <h6>
                          Certified that the particulars given above are True
                          and Correct.
                        </h6>
                        <div className="d-flex justify-content-between">
                          <span>Total no. of Deliveries: 1</span>
                          <span>Total no. of SKUs: {cart.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Replace this section */}
                  <div className="d-flex mb-3">
                    {!isBillGenerated ? (
                      <button
                        className="btn btn-dark ms-auto"
                        onClick={HandleGenerateBtn}
                      >
                        Generate Bill
                      </button>
                    ) : (
                      <>
                        <button className="btn btn-dark ms-auto">
                          Edit Bill
                        </button>
                        <button
                          className="btn btn-dark ms-2"
                          onClick={handlePrint}
                        >
                          Print
                        </button>
                        <button
                          className="btn btn-dark ms-2"
                          onClick={handleDownload}
                        >
                          Download
                        </button>
                        <button
                          className="btn btn-dark ms-2"
                          onClick={() => window.location.reload()}
                        >
                          Create New Bill
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </section>

          <section className="mx-3 ">
            <div
              ref={invoiceRef}
              className="container my-4 p-4 border rounded bg-white"
            >
              <h4 className="mb-4">Invoice Preview</h4>
              <div className="border p-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>GSTIN:</strong> {GSTIN}
                  </div>
                  <div>
                    <strong>ORIGINAL FOR RECIPIENT</strong>
                  </div>
                </div>

                <h5 className="text-center fw-bold mt-3">
                  {Companyname}
                </h5>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <strong>Principal Place of Business:</strong>{PPB}
                    </p>
                    <p>
                      <strong>Supply/Dispatch From Location Address:</strong>{" "}
                      {SDL}
                    </p>
                    <p>
                      <strong>Supply/Dispatch Code:</strong> {SDC}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>FSSAI Lic No:</strong> {FSSAI}
                    </p>
                    <p>
                      <strong>GSTIN:</strong> {GSTIN}
                    </p>
                    <p>
                      <strong>State Code:</strong> {StateCode}
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <strong>Tax Invoice:</strong> 2025BT0001
                  </div>
                  <div>
                    <strong>Date:</strong> {InvoiceDate}
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <strong>Billed To:</strong> {Name}
                    </p>
                    <p>
                      <strong>Address:</strong>
                      <br />
                      {AddressL1}{AddressL2}{AddressL3}
                    </p>
                    <p>
                      <strong>Contact No:</strong> {ContactNo}
                    </p>
                    <p>
                      <strong>State Code:</strong> {CStateCode}
                    </p>
                    <p>
                      <strong>GSTIN:</strong> {CGSTIN}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Shipped To:</strong> {SName}
                    </p>
                    <p>
                      <strong>Address:</strong>
                      <br />
                     {AddressL1}{AddressL2}{AddressL3}
                    </p>
                    <p>
                      <strong>Contact No:</strong>{SContactNo}
                    </p>
                    <p>
                      <strong>State Code:</strong> {CStateCode}
                    </p>
                    <p>
                      <strong>GSTIN:</strong> {CGSTIN}
                    </p>
                  </div>
                </div>

                {cart.length === 0 ? (
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
                        <th>Sr. No.</th>
                        {Object.keys(cart[0]).map((key) => (
                          <th key={key}>{key}</th>
                        ))}
                        <th>Tax</th>
                        <th>Base Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, idx) => (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          {Object.values(item).map((value, i) => (
                            <td key={i}>{value}</td>
                          ))}
                          <td>{calculateTax(item)}</td>
                          <td>{calculateBaseValue(item)}</td>
                        </tr>
                      ))}
                      <tr className="table-light fw-bold">
                        <td colSpan={Object.keys(cart[0]).length + 1}>Total</td>
                        <td>{totalTax}</td>
                        <td>{totalBaseValue}</td>
                      </tr>
                      <tr className="table-success fw-bold">
                        <td
                          colSpan={Object.keys(cart[0]).length + 2}
                          className="text-end"
                        >
                          Total Invoice Value: ₹ {totalInvoiceValue}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}

                <div className="d-flex justify-content-between mt-3">
                  <div>
                    Certified that the particulars given above are True and
                    Correct.
                  </div>
                  <div>
                    <strong>Total no. of SKUs:</strong> {cart.length}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
