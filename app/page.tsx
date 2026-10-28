import ThemeToggle from "./theme-toggle";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="container nav__inner">
          <a className="nav__mark" href="#main" aria-label="ASTRA, home">
            astra<span aria-hidden="true">_</span>
          </a>
          <div className="nav__end">
            <nav aria-label="Page" className="nav__links">
              <a className="nav__link" href="#how">
                How it runs
              </a>
              <a className="nav__link" href="#questions">
                Questions
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div className="hero__text">
              <h1 id="hero-title">A coding agent on your own machine.</h1>
              <p className="lead">
                It reads, edits and runs code with models on your machine.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#stay-tuned">
                  Stay tuned
                </a>
                <a className="btn btn--quiet" href="#how">
                  See how it runs
                </a>
              </div>
              <p className="hero__meta">Nothing to install yet.</p>
            </div>

            <figure className="session" aria-label="Example ASTRA session">
              <div className="session__bar">
                <span>~/notes-app</span>
                <span>qwen2.5-coder:7b</span>
              </div>
              <div className="session__body">
                <p className="s-line">
                  <span className="s-prompt">$</span> astra -p{" "}
                  <span className="s-arg">&quot;why is the total wrong?&quot;</span>
                </p>
                <p className="s-tool">
                  <span className="s-tool__name">read</span>
                  <span>src/total.ts</span>
                </p>
                <p className="s-out">
                  The discount is applied before tax, so tax is charged on the
                  full subtotal. Move the discount below the tax line.
                </p>
                <p className="s-tool">
                  <span className="s-tool__name">edit</span>
                  <span>src/total.ts</span>
                  <span className="s-stat">-3 +3</span>
                </p>
                <p className="s-tool">
                  <span className="s-tool__name">bash</span>
                  <span>bun test</span>
                  <span className="s-stat">pass</span>
                </p>
                <p className="s-done">done</p>
                <p className="s-line s-end">
                  <span className="s-prompt">$</span>{" "}
                  <span className="s-caret" aria-hidden="true" />
                </p>
              </div>
            </figure>
          </div>
        </section>

        <section id="how" className="section how" aria-labelledby="how-title">
          <div className="container">
            <div className="head">
              <h2 id="how-title">It reads before it writes.</h2>
              <p className="lead">
                Every change is an exact-string edit you can inspect.
              </p>
            </div>

            <div className="diff">
              <div className="diff__head">
                <span>--- a/src/total.ts</span>
                <span>+++ b/src/total.ts</span>
              </div>
              <div className="diff__body">
                <p className="diff__row diff__row--hunk">
                  <span className="diff__no" />
                  <span className="diff__sign" />
                  <span>@@ -18,7 +18,7 @@ export function total(cart: Cart) {"{"}</span>
                </p>
                <p className="diff__row">
                  <span className="diff__no">19</span>
                  <span className="diff__sign" />
                  <span> const subtotal = sum(cart.items)</span>
                </p>
                <p className="diff__row diff__row--del">
                  <span className="diff__no">20</span>
                  <span className="diff__sign">-</span>
                  <span> const taxed = subtotal * TAX</span>
                </p>
                <p className="diff__row diff__row--del">
                  <span className="diff__no">21</span>
                  <span className="diff__sign">-</span>
                  <span> return taxed - discount(cart)</span>
                </p>
                <p className="diff__row diff__row--add">
                  <span className="diff__no">20</span>
                  <span className="diff__sign">+</span>
                  <span> const discounted = subtotal - discount(cart)</span>
                </p>
                <p className="diff__row diff__row--add">
                  <span className="diff__no">21</span>
                  <span className="diff__sign">+</span>
                  <span> return discounted + discounted * TAX</span>
                </p>
                <p className="diff__row">
                  <span className="diff__no">22</span>
                  <span className="diff__sign" />
                  <span> {"}"}</span>
                </p>
              </div>
            </div>
            <p className="diff__caption">
              A sample project. Real sessions run in your folder.
            </p>
          </div>
        </section>

        <section
          id="commands"
          className="section commands"
          aria-labelledby="commands-title"
        >
          <div className="container">
            <div className="head-split">
              <h2 id="commands-title">Four ways in</h2>
              <p className="lead">
                Start a session, ask once, or switch models mid-session.
              </p>
            </div>

            <table className="cmd-table">
              <thead>
                <tr>
                  <th scope="col">Command</th>
                  <th scope="col">What it does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cmd">
                    <code>astra</code>
                  </td>
                  <td>Start a session in the folder you are in.</td>
                </tr>
                <tr>
                  <td className="cmd">
                    <code>
                      astra -p <span className="arg">&quot;…&quot;</span>
                    </code>
                  </td>
                  <td>Ask one thing, print the answer, exit.</td>
                </tr>
                <tr>
                  <td className="cmd">
                    <code>astra models</code>
                  </td>
                  <td>List the models Ollama has installed.</td>
                </tr>
                <tr>
                  <td className="cmd">
                    <code>
                      /model <span className="arg">&lt;name&gt;</span>
                    </code>
                  </td>
                  <td>Switch models without leaving the session.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="questions"
          className="section questions"
          aria-labelledby="questions-title"
        >
          <div className="container">
            <div className="head">
              <h2 id="questions-title">Before you wait</h2>
              <p className="lead">
                Four things a local agent has to answer.
              </p>
            </div>

            <div className="faq">
              <div className="question">
                <h3>Where does my code go?</h3>
                <p>Nowhere. Ollama runs the model on your machine.</p>
              </div>
              <div className="question">
                <h3>Which models work?</h3>
                <p>
                  Any Ollama model with tool calling; <code>astra models</code>{" "}
                  lists yours.
                </p>
              </div>
              <div className="question">
                <h3>What can it touch?</h3>
                <p>
                  Files in the folder you start it in. Writes and commands ask
                  first.
                </p>
              </div>
              <div className="question">
                <h3>When can I try it?</h3>
                <p>No date yet. The first build will appear on this page.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="stay-tuned"
          className="band"
          aria-labelledby="stay-tuned-title"
        >
          <div className="container band__inner">
            <h2 id="stay-tuned-title" className="band__statement">
              Stay tuned. First build lands here.
            </h2>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__mark">
            astra<span aria-hidden="true">_</span>
          </p>
          <p className="footer__line">
            Autonomous Shell &amp; Tool-use Reasoning Agent.
          </p>
          <p className="footer__meta">
            astra, from the Sanskrit for a tool. Runs on{" "}
            <a href="https://ollama.com">Ollama</a>. Built with Bun and
            TypeScript.
          </p>
          <p className="footer__date">
            <time dateTime="2026-10">October 2026</time>
          </p>
        </div>
      </footer>
    </>
  );
}
