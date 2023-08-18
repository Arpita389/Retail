import "../index.css";
import { Paper, Button } from "@mui/material";
function Item({ item }) {
  return (
    <Paper>
      <div className="slides">
        <div className="slide1">
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "45vh" }}
          />
        </div>
        <div
          className="slide2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>{item.title}</h2>

          <Button variant="contained">Check it out!</Button>
        </div>
      </div>
    </Paper>
  );
}
export default Item;
