import { tickets } from "@/lib/data";
import type { TicketStatus } from "@/lib/data";

const steps: { key: TicketStatus; label: string }[] = [
  { key: "todo", label: "To do" },
  { key: "in-progress", label: "In progress" },
  { key: "done", label: "Done" },
];

export default function ProgressPage() {
  const hire =
    tickets.find((t) => t.newHire.includes("Sara"))?.newHire ??
    tickets[0]?.newHire ??
    "";
  const mine = tickets.filter((t) => t.newHire === hire);
  const done = mine.filter((t) => t.status === "done").length;
  const percent = mine.length ? Math.round((done / mine.length) * 100) : 0;

  return (
    <div>
      <header className="page-head">
        <h1>My progress</h1>
        <p className="page-sub">Where your desk and equipment setup stands</p>
      </header>

      <section className="summary">
        <div className="summary-top">
          <span className="summary-count">
            {done} of {mine.length} done
          </span>
          <span className="summary-percent">{percent}%</span>
        </div>
        <div
          className="bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="bar-fill" style={{ width: `${percent}%` }} />
        </div>
      </section>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Group</th>
              <th>Tag</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mine.map((ticket) => {
              const index = steps.findIndex((s) => s.key === ticket.status);
              return (
                <tr key={ticket.id}>
                  <td className="cell-title">{ticket.title}</td>
                  <td>{ticket.group}</td>
                  <td>
                    <span className="tag">{ticket.tag}</span>
                  </td>
                  <td>
                    <div className="mini-track" aria-hidden="true">
                      {steps.map((step, i) => (
                        <span
                          key={step.key}
                          className={
                            i < index
                              ? "mini-seg passed"
                              : i === index
                                ? "mini-seg current"
                                : "mini-seg"
                          }
                        />
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className={`state state-${ticket.status}`}>
                      {steps[index].label}
                    </span>
                  </td>
                </tr>
              );
            })}
            {mine.length === 0 && (
              <tr>
                <td colSpan={5} className="empty">
                  No tickets assigned yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}