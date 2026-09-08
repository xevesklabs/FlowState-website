import './NotesMockup.css';

const notesList = [
  { title: 'Architecture decisions', preview: 'Using Dexie.js for IndexedDB...', pinned: true, active: true },
  { title: 'Sprint retrospective', preview: 'What went well: CI pipeline...', pinned: false, active: false },
  { title: 'API design notes', preview: 'REST endpoints for telemetry...', pinned: false, active: false },
  { title: 'Reading list', preview: 'DDIA, Clean Code, Pragmatic...', pinned: false, active: false },
];

const editorContent = [
  { type: 'h1', text: 'Architecture decisions' },
  { type: 'p', text: 'Using Dexie.js for IndexedDB persistence. Key design rules:' },
  { type: 'bullet', text: 'Never call Date.now() in render cycle' },
  { type: 'bullet', text: 'No inline fallback arrays on useLiveQuery' },
  { type: 'bullet', text: 'Sort at DB level, not in component' },
  { type: 'p', text: 'The Tauri wrapper isolates storage per-app...' },
];

export function NotesMockup() {
  return (
    <div className="notes-mockup">
      {/* Sidebar */}
      <div className="notes-sidebar">
        <div className="notes-sidebar__header font-mono">NOTES</div>
        {notesList.map(({ title, preview, pinned, active }) => (
          <div key={title} className={`notes-item ${active ? 'notes-item--active' : ''}`}>
            {pinned && <span className="notes-pin font-mono">PIN</span>}
            <p className="notes-item__title">{title}</p>
            <p className="notes-item__preview">{preview}</p>
          </div>
        ))}
      </div>

      {/* Editor */}
      <div className="notes-editor">
        {editorContent.map(({ type, text }, i) => (
          <div key={i} className={`notes-editor__${type}`}>
            {type === 'bullet' ? `• ${text}` : text}
          </div>
        ))}
        <div className="notes-cursor" />
      </div>
    </div>
  );
}
