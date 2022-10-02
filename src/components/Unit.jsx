import { useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { unitDetail } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Unit() {
  const params = useParams();
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitData[0]);
  console.warn("Unit detail data", data);
  useEffect(() => {
    dispatch(unitDetail(params.id));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header currentPage={"Unit Detail Page"} />
      <div className="content">
        <table>
          <tr>
            <th>ID:</th>
            <td>{data.id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{data.description}</td>
          </tr>
          <tr>
            <th>Min. Required Age:</th>
            <td>{data.age}</td>
          </tr>
          <tr>
            <th>Wood Cost:</th>
            <td>
              {data.cost ? (
                data.cost.Wood ? (
                  <span>{data.cost.Wood}</span>
                ) : (
                  "No Cost"
                )
              ) : (
                "No Cost"
              )}
            </td>
          </tr>
          <tr>
            <th>Food Cost:</th>
            <td>
              {data.cost ? (
                data.cost.Food ? (
                  <span>{data.cost.Food}</span>
                ) : (
                  "No Cost"
                )
              ) : (
                "No Cost"
              )}
            </td>
          </tr>
          <tr>
            <th>Gold Cost:</th>
            <td>
              {data.cost ? (
                data.cost.Gold ? (
                  <span>{data.cost.Gold}</span>
                ) : (
                  "No Cost"
                )
              ) : (
                "No Cost"
              )}
            </td>
          </tr>
          <tr>
            <th>Build Time:</th>
            <td>{data.build_time}</td>
          </tr>
          <tr>
            <th>Reload Time:</th>
            <td>{data.reload_time}</td>
          </tr>
          <tr>
            <th>Hit Points:</th>
            <td>{data.hit_points}</td>
          </tr>
          <tr>
            <th>Attack:</th>
            <td>{data.attack}</td>
          </tr>
          <tr>
            <th>Accuracy:</th>
            <td>{data.accuracy}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Unit;
