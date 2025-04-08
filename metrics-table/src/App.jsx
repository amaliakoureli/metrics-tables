import React from "react";
import imgLogo from "./assets/Logo.jpg";
import "./App.css";

function App() {
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const inputs = Array.from(document.querySelectorAll("input"));
      const currentIndex = inputs.indexOf(e.target);

      if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
          <img
            src={imgLogo}
            alt="Olympia Electronics Logo"
            className="LogoImage"
          />
        </div>

        <div className="col-12 col-md-9 TopWidth">
          <form className="Details NoBottomBorder">
            <label className="DetailsLabel" htmlFor="ProductCode">
              Κωδικός προιόντος:
            </label>
            <input
              className="DetailsInput"
              name="ProductCode"
              type="text"
              placeholder="πχ. 903011588"
              onKeyDown={handleEnterPress}
            />

            <label className="DetailsLabel" htmlFor="Version">
              Έκδοση:
            </label>
            <input
              className="DetailsInput"
              name="Version"
              type="text"
              placeholder="πχ. V.10"
              onKeyDown={handleEnterPress}
            />
            <br />

            <label className="DetailsLabel" htmlFor="DocCode">
              Κωδικός εγγράφου:
            </label>
            <input
              className="DetailsInput"
              name="DocCode"
              type="text"
              placeholder="πχ. 903011588_50_00"
              onKeyDown={handleEnterPress}
            />

            <label className="DetailsLabel" htmlFor="Product">
              Προιόν:
            </label>
            <input
              className="DetailsInput"
              name="Product"
              type="text"
              placeholder="πχ. Olympus-1001_TNY_HL_NK"
              onKeyDown={handleEnterPress}
            />
            <br />
            <hr />
            <label className="DetailsLabel">
              Αριθμός Πλακέτας/ Προγράμματος
            </label>
            <br />
            <label className="DetailsLabel" htmlFor="BoardNum">
              Κεντρική:
            </label>
            <input
              className="DetailsInput"
              name="BoardNum"
              type="text"
              placeholder="πχ. 1505213"
              onKeyDown={handleEnterPress}
            />

            <label className="DetailsLabel" htmlFor="BoardNum">
              Led:
            </label>
            <input
              className="DetailsInput"
              name="BoardNum"
              type="text"
              placeholder="πχ. 2701205"
              onKeyDown={handleEnterPress}
            />

            <label className="DetailsLabel" htmlFor="BoardNum">
              Firmware:
            </label>
            <input
              className="DetailsInput"
              name="BoardNum"
              type="text"
              placeholder="πχ. V.3.13.01"
              onKeyDown={handleEnterPress}
            />
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center RowDesign NoBottomBorder">
          <label className="VersionLabel" htmlFor="DocVersionInput">
            Document Version / Revision
          </label>
        </div>

        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center RowDesignLight NoBottomBorder">
          <input
            className="VersionInput"
            name="DocVersionInput"
            type="text"
            placeholder="πχ. V003 / R002"
            onKeyDown={handleEnterPress}
          />
        </div>

        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center RowDesign NoBottomBorder">
          <label className="VersionLabel" htmlFor="Date">
            Document Version Date
          </label>
        </div>

        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center RowDesignLight NoBottomBorder">
          <input
            className="VersionInput"
            name="Date"
            type="date"
            onKeyDown={handleEnterPress}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center RowDesignWhite NoBottomBorder">
          <label className="TesterLabel" htmlFor="tester">
            Εκδότης:{" "}
          </label>
          <input
            className="TesterName"
            name="tester"
            type="text"
            placeholder="Ονοματεπώνυμο"
            onKeyDown={handleEnterPress}
          />
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center RowDesignWhite NoBottomBorder">
          <input
            className="DateOf"
            name="fullDate"
            type="date"
            placeholder="Ημερομηνία"
            onKeyDown={handleEnterPress}
          />
        </div>

        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center RowDesignWhite NoBottomBorder">
          <label className="Page" htmlFor="pages">
            Σελίδα ... από ...{" "}
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center RowDesignWhite">
          <label className="DescriptionL" htmlFor="description">
            Περιγραφή:{" "}
          </label>
          <input
            className="Description"
            name="description"
            type="text"
            placeholder="Σύντομη περιγραφή προιόντος"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
