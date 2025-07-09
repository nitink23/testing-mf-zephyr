import React from "react";
import ReactDOM from "react-dom/client";
import { RemoteButton, RemoteCard, TicTacToe } from "./components";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl p-6">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-2">Name: testing-mf-zephyr</h1>
      <div className="text-xl text-gray-600">Framework: react-19</div>
    </div>
    
    <div className="space-y-8">
      {/* Tic Tac Toe Game */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🎮 Fun Tic Tac Toe Game</h2>
        <TicTacToe className="max-w-md mx-auto" />
      </div>

      {/* Remote Components Demo */}
      <RemoteCard 
        title="Remote Components Demo" 
        subtitle="These components can be consumed by other applications"
        variant="elevated"
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Button Variants:</h4>
            <div className="flex gap-4 flex-wrap">
              <RemoteButton 
                text="Primary Button" 
                variant="primary" 
                onClick={() => alert('Primary clicked!')}
              />
              <RemoteButton 
                text="Secondary Button" 
                variant="secondary" 
                onClick={() => alert('Secondary clicked!')}
              />
              <RemoteButton 
                text="Danger Button" 
                variant="danger" 
                onClick={() => alert('Danger clicked!')}
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Button Sizes:</h4>
            <div className="flex gap-4 flex-wrap items-center">
              <RemoteButton 
                text="Small" 
                size="small" 
                onClick={() => alert('Small clicked!')}
              />
              <RemoteButton 
                text="Medium" 
                size="medium" 
                onClick={() => alert('Medium clicked!')}
              />
              <RemoteButton 
                text="Large" 
                size="large" 
                onClick={() => alert('Large clicked!')}
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Disabled State:</h4>
            <RemoteButton 
              text="Disabled Button" 
              disabled={true}
            />
          </div>
        </div>
      </RemoteCard>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);