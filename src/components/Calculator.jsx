
export default function Calculator({onChange,inputValue}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENTS</label>
          <input
            type="number"
            required
            value={inputValue.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENTS</label>
          <input type="number" required 
          value={inputValue.annualInvestment}
          onChange={(event) =>
            onChange("annualInvestment", event.target.value)
          }/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required 
          value={inputValue.expectedReturn}
          onChange={(event) =>
            onChange("expectedReturn", event.target.value)
          }/>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required 
          value={inputValue.duration}
          onChange={(event) =>
            onChange("duration", event.target.value)
          }/>
        </p>
      </div>
    </section>
  );
}
