"use client";

import { useState } from "react";
import { tickets as initialTickets } from "@/lib/data";
import type { Ticket, TicketGroup, TicketStatus } from "@/lib/data";

type View = "board" | "table";

const columns: { key: TicketStatus; label: string }[] = [
  { key: "todo", label: "To do" },
  { key: "in-progress", label: "In progress" },
  { key: "done", label: "Done" },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d={direction === "left" ? "M7.5 3 4.5 6l3 3" : "M4.5 3l3 3-3 3"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [filter, setFilter] = useState<"all" | TicketGroup>("all");
  const [view, setView] = useState<View>("board");

  function setStatus(id: string, status: TicketStatus) {
    setTickets((current) =>
      current.map((ticket) =>
        ticket.id === id ? { ...ticket, status } : ticket,
      ),
    );
  }

  function move(id: string, direction: number) {
    const ticket = tickets.find((t) => t.id === id);
    if (!ticket) return;
    const index = columns.findIndex((c) => c.key === ticket.status);
    const next = columns[index + direction];
    if (next) setStatus(id, next.key);
  }

  const visible =
    filter === "all"
      ? tickets
      : tickets.filter((ticket) => ticket.group === filter);

  const sorted = [...visible].sort(
    (a, b) =>
      columns.findIndex((c) => c.key === a.status) -
      columns.findIndex((c) => c.key === b.status),
  );

  return (
    <div>
      <header className="page-head">
        <h1>Setup tickets</h1>
        <p className="page-sub">Desk and equipment setup for new hires</p>
      </header>

      <div className="toolbar">
        <div className="filter-row">
          <label htmlFor="group-filter">Group</label>
          <select
            id="group-filter"
            value={filter}
            onChange={(event) =>
              setFilter(event.target.value as "all" | TicketGroup)
            }
          >
            <option value="all">All groups</option>
            <option value="IT Support">IT Support</option>
            <option value="Facilities">Facilities</option>
          </select>
        </div>

        <div className="view-toggle" role="group" aria-label="View">
          <button
            type="button"
            className={view === "board" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setView("board")}
            aria-pressed={view === "board"}
          >
            Board
          </button>
          <button
            type="button"
            className={view === "table" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setView("table")}
            aria-pressed={view === "table"}
          >
            Table
          </button>
        </div>
      </div>

      {view === "board" ? (
        <div className="board">
          {columns.map((column) => {
            const columnTickets = visible.filter(
              (ticket) => ticket.status === column.key,
            );
            const index = columns.findIndex((c) => c.key === column.key);

            return (
              <section className="column" key={column.key}>
                <header className="column-head">
                  <h2>{column.label}</h2>
                  <span className="count">{columnTickets.length}</span>
                </header>
                <div className="column-body">
                  {columnTickets.map((ticket) => (
                    <article className="ticket" key={ticket.id}>
                      <div className="ticket-title">{ticket.title}</div>
                      <div className="ticket-meta">
                        {ticket.newHire} · {ticket.group}
                      </div>
                      <div className="ticket-foot">
                        <span className="tag">{ticket.tag}</span>
                        <div className="ticket-actions">
                          <button
                            type="button"
                            className="icon-btn"
                            onClick={() => move(ticket.id, -1)}
                            disabled={index === 0}
                            aria-label={`Move ${ticket.title} to previous column`}
                          >
                            <Arrow direction="left" />
                          </button>
                          <button
                            type="button"
                            className="icon-btn"
                            onClick={() => move(ticket.id, 1)}
                            disabled={index === columns.length - 1}
                            aria-label={`Move ${ticket.title} to next column`}
                          >
                            <Arrow direction="right" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                  {columnTickets.length === 0 && (
                    <p className="empty">No tickets.</p>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>New hire</th>
                <th>Group</th>
                <th>Tag</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="cell-title">{ticket.title}</td>
                  <td>{ticket.newHire}</td>
                  <td>{ticket.group}</td>
                  <td>
                    <span className="tag">{ticket.tag}</span>
                  </td>
                  <td>
                    <select
                      className="status-select"
                      value={ticket.status}
                      onChange={(event) =>
                        setStatus(ticket.id, event.target.value as TicketStatus)
                      }
                      aria-label={`Status for ${ticket.title}`}
                    >
                      {columns.map((column) => (
                        <option key={column.key} value={column.key}>
                          {column.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={5} className="empty">
                    No tickets.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}