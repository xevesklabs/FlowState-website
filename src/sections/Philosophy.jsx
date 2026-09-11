import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy" aria-label="Philosophy">
      <div className="container">
        <div className="philosophy__inner reveal">
          <h2 className="philosophy__headline font-serif">
            Your data doesn't<br />
            need a server.
          </h2>
          <p className="philosophy__copy">
            Most productivity apps hold your thoughts hostage in the cloud. FlowState is different. 
            It is a truly local-first application. Your tasks, habits, and notes never leave your device. 
            No cloud dependency. No accounts. No subscriptions. Just you and your work.
          </p>
          
          <div className="philosophy__system reveal reveal-delay-2">
            <div className="philosophy__system-items">
              <span className="font-mono system-node">Tasks</span>
              <span className="font-mono system-node">Notes</span>
              <span className="font-mono system-node">Habits</span>
              <span className="font-mono system-node">Focus</span>
            </div>
            
            <div className="philosophy__flow">
              <div className="philosophy__line" />
              <div className="philosophy__arrow">↓</div>
            </div>
            
            <div className="philosophy__device font-mono">
              <span className="device-indicator" />
              Your Device
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
