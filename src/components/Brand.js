import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";
import { useContext } from "react";
import ClipboardButton from "react-clipboard.js";
import { GrCopy } from "react-icons/gr";

function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);
  const { setCopied } = useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
      console.log(setCopied);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color) => (
          <ClipboardButton
            onSuccess={() => setColor(color)}
            data-clipboard-text={color}
            component="span"
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            <div className="copy-logo"><GrCopy /></div>
            <div className="color">{color}</div>
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
}

export default Brand;
