import React from "react";
import "../CSS/profile.css";

function CoderProfile() {
  return (
     <div className="terminal">
      <div className="terminal-header">
        <div className="bar gradient-bar-left" />
        <div className="bar gradient-bar-right" />
      </div>
      <div className="terminal-controls">
        <span className="dot red" />
        <span className="dot orange" />
        <span className="dot green" />
      </div>
      <div className="terminal-content">
        <pre className="code-block">
          <code>
<span className="pink">const</span> <span className="white">coder</span> <span className="pink">=</span> <span className="gray">&#123;</span>
  <br />
  &nbsp;&nbsp;<span className="white">name:</span> <span className="gray">'</span><span className="amber">Uday Raj Sharma</span><span className="gray">',</span>
  <br />
  &nbsp;&nbsp;<span className="white">skills:</span> <span className="gray">[</span><span className="amber">'C','Python','Java','HTML','CSS', 'JavaScript','React', 'NodeJS','MongoDB'</span><span className="gray">],</span>
  <br />
  &nbsp;&nbsp;<span className="white">hardWorker:</span> <span className="orange1">true</span><span className="gray">,</span>
  <br />
  &nbsp;&nbsp;<span className="white">quickLearner:</span> <span className="orange1">true</span><span className="gray">,</span>
  <br />
  &nbsp;&nbsp;<span className="white">problemSolver:</span> <span className="orange1">true</span><span className="gray">,</span>
  <br />
  &nbsp;&nbsp;<span className="green1">hireable:</span> <span className="orange1">function</span> <span className="gray">() &#123;</span>
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange1">return</span> <span className="gray">(</span>
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cyan">this.</span><span className="white">hardWorker</span> <span className="amber">&amp;&amp;</span>
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cyan">this.</span><span className="white">problemSolver</span> <span className="amber">&amp;&amp;</span>
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cyan">this.</span><span className="white">skills.length</span> <span className="amber">&gt;=</span> <span className="orange1">5</span>
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="gray">);</span>
  <br />
  &nbsp;&nbsp;<span className="gray">&#125;,</span>
  <br />
<span className="gray">&#125;;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CoderProfile;
