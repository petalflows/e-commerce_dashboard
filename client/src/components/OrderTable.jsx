import { useState, useEffect } from "react";
import { getOrders } from "../api";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    getOrders(page, limit).then((res) => {
      setOrders(res.data);
      setTotal(res.total);
    });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>#{o.id}</td>
              <td>{o.customers?.name}</td>
              <td>{o.products?.name}</td>
              <td>{o.quantity}</td>
              <td>${o.total.toLocaleString()}</td>
              <td>
                <span className={`status-badge status-${o.status}`}>{o.status}</span>
              </td>
              <td>{new Date(o.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page} / {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
