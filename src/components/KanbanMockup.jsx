import './KanbanMockup.css';

// CSS-drawn replica of the FlowState Kanban board
// Swap with a real screenshot later by replacing this component with an <img>

const todoCards = [
  { title: 'Set up CI pipeline', badge: 'HIGH', badgeClass: 'badge--red', time: '2d left' },
  { title: 'Write unit tests', badge: 'MED', badgeClass: 'badge--orange', time: '5d left' },
];

const inProgressCards = [
  { title: 'Refactor auth module', badge: 'HIGH', badgeClass: 'badge--red', time: '1d left' },
];

const doneCards = [
  { title: 'Design system tokens', badge: 'LOW', badgeClass: 'badge--green', time: 'Done' },
  { title: 'Database migrations', badge: 'MED', badgeClass: 'badge--orange', time: 'Done' },
];

function MockCard({ title, badge, badgeClass, time, done }) {
  return (
    <div className={`mock-card ${done ? 'mock-card--done' : ''}`}>
      <div className="mock-card__top">
        <span className={`mock-badge ${badgeClass}`}>{badge}</span>
        <span className="mock-time">{time}</span>
      </div>
      <p className="mock-card__title">{title}</p>
      <div className="mock-card__bottom">
        <div className="mock-avatar" />
      </div>
    </div>
  );
}

function MockColumn({ title, count, accentClass, cards, done }) {
  return (
    <div className="mock-column">
      <div className="mock-column__header">
        <span className={`mock-column__title ${accentClass}`}>{title}</span>
        <span className="mock-column__count">{count}</span>
      </div>
      {cards.map((card) => (
        <MockCard key={card.title} {...card} done={done} />
      ))}
    </div>
  );
}

export function KanbanMockup() {
  return (
    <div className="kanban-mockup">
      {/* Window chrome */}
      <div className="kanban-mockup__chrome">
        <span className="chrome-dot chrome-dot--red" />
        <span className="chrome-dot chrome-dot--yellow" />
        <span className="chrome-dot chrome-dot--green" />
        <span className="chrome-label">FlowState — Tasks</span>
      </div>

      {/* Board */}
      <div className="kanban-mockup__board">
        <MockColumn
          title="TO DO"
          count={todoCards.length}
          accentClass="col--neutral"
          cards={todoCards}
        />
        <MockColumn
          title="IN PROGRESS"
          count={inProgressCards.length}
          accentClass="col--blue"
          cards={inProgressCards}
        />
        <MockColumn
          title="DONE"
          count={doneCards.length}
          accentClass="col--green"
          cards={doneCards}
          done
        />
      </div>
    </div>
  );
}
