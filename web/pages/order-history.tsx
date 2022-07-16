import Layout from "../components/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  orderId: number,
  dateSent: string,
  dateCompleted: string,
  radiologist: string,
  physician: string,
  status: string
) {
  return { orderId, dateSent, dateCompleted, radiologist, physician, status };
}

const rows = [
  createData(
    431,
    "July 1st, 2022",
    "July 1st, 2022",
    "Dr. Oneil Lee",
    "Dr. Oneil Lee",
    "In progress"
  ),
  createData(
    43243214,
    "July 1st, 2022",
    "July 1st, 2022",
    "Dr. Oneil Lee",
    "Dr. Oneil Lee",
    "Completed"
  ),
  createData(
    54244532,
    "July 1st, 2022",
    "July 1st, 2022",
    "Dr. Oneil Lee",
    "Dr. Oneil Lee",
    "In progress"
  ),
  createData(
    847294,
    "July 1st, 2022",
    "July 1st, 2022",
    "Dr. Oneil Lee",
    "Dr. Oneil Lee",
    "Completed"
  ),
  createData(
    917482,
    "July 1st, 2022",
    "July 1st, 2022",
    "Dr. Oneil Lee",
    "Dr. Oneil Lee",
    "In progress"
  ),
];

const OrderHistory = () => {
  return (
    <Layout>
      <div className="p-12">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="right">Date Sent</TableCell>
                <TableCell align="right">Date Completed</TableCell>
                <TableCell align="right">Radiologist</TableCell>
                <TableCell align="right">Physician</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.orderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.orderId}
                  </TableCell>
                  <TableCell align="right">{row.dateSent}</TableCell>
                  <TableCell align="right">{row.dateCompleted}</TableCell>
                  <TableCell align="right">{row.radiologist}</TableCell>
                  <TableCell align="right">{row.physician}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>
    </Layout>
  );
};

export default OrderHistory;
