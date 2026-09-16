// Pong. You on the left, the machine on the right. First to 7.
(function () {
  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const PAD_H = 70, PAD_W = 10, BALL = 10, WIN = 7;
  const youEl = document.getElementById("you");
  const cpuEl = document.getElementById("cpu");

  const state = {
    you: { y: H / 2 - PAD_H / 2, score: 0 },
    cpu: { y: H / 2 - PAD_H / 2, score: 0 },
    ball: { x: W / 2, y: H / 2, vx: 0, vy: 0 },
    running: false,
    over: false,
    keys: { up: false, down: false },
  };

  function serve(toward) {
    const angle = (Math.random() * 0.6 - 0.3) * Math.PI;
    const speed = 5;
    state.ball.x = W / 2;
    state.ball.y = H / 2;
    state.ball.vx = Math.cos(angle) * speed * toward;
    state.ball.vy = Math.sin(angle) * speed;
  }

  function reset() {
    state.you.score = 0;
    state.cpu.score = 0;
    state.over = false;
    youEl.textContent = "0";
    cpuEl.textContent = "0";
    serve(1);
  }

  function clamp(y) {
    return Math.max(0, Math.min(H - PAD_H, y));
  }

  function movePaddles() {
    if (state.keys.up) state.you.y = clamp(state.you.y - 6);
    if (state.keys.down) state.you.y = clamp(state.you.y + 6);
    // The machine follows the ball with a top speed, so it can be beaten on angles.
    const target = state.ball.y - PAD_H / 2;
    const diff = target - state.cpu.y;
    state.cpu.y = clamp(state.cpu.y + Math.sign(diff) * Math.min(Math.abs(diff), 4.2));
  }

  function bounce(paddle, dir) {
    // Hit position on the paddle sets the return angle; each hit adds a little speed.
    const rel = (state.ball.y + BALL / 2 - (paddle.y + PAD_H / 2)) / (PAD_H / 2);
    const speed = Math.min(Math.hypot(state.ball.vx, state.ball.vy) * 1.05, 12);
    const angle = rel * 0.25 * Math.PI;
    state.ball.vx = Math.cos(angle) * speed * dir;
    state.ball.vy = Math.sin(angle) * speed;
  }

  function moveBall() {
    const b = state.ball;
    b.x += b.vx;
    b.y += b.vy;
    if (b.y <= 0 || b.y + BALL >= H) {
      b.vy = -b.vy;
      b.y = Math.max(0, Math.min(H - BALL, b.y));
    }
    const hitYou = b.x <= PAD_W && b.y + BALL >= state.you.y && b.y <= state.you.y + PAD_H;
    const hitCpu = b.x + BALL >= W - PAD_W && b.y + BALL >= state.cpu.y && b.y <= state.cpu.y + PAD_H;
    if (hitYou && b.vx < 0) { b.x = PAD_W; bounce(state.you, 1); }
    if (hitCpu && b.vx > 0) { b.x = W - PAD_W - BALL; bounce(state.cpu, -1); }
    if (b.x + BALL < 0) score(state.cpu, cpuEl, 1);
    if (b.x > W) score(state.you, youEl, -1);
  }

  function score(side, el, serveToward) {
    side.score += 1;
    el.textContent = String(side.score);
    if (side.score >= WIN) {
      state.over = true;
      state.running = false;
    } else {
      serve(serveToward);
    }
  }

  function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#fff";
    for (let y = 0; y < H; y += 24) ctx.fillRect(W / 2 - 1, y, 2, 12);
    ctx.fillRect(0, state.you.y, PAD_W, PAD_H);
    ctx.fillRect(W - PAD_W, state.cpu.y, PAD_W, PAD_H);
    ctx.fillRect(state.ball.x, state.ball.y, BALL, BALL);
    if (!state.running) {
      ctx.font = "16px monospace";
      ctx.textAlign = "center";
      const msg = state.over
        ? (state.you.score > state.cpu.score ? "you win. click to play again" : "machine wins. click to play again")
        : "click to start";
      ctx.fillText(msg, W / 2, H / 2 - 30);
    }
  }

  function frame() {
    if (state.running) {
      movePaddles();
      moveBall();
    }
    draw();
    requestAnimationFrame(frame);
  }

  function pointerY(evt) {
    const rect = canvas.getBoundingClientRect();
    const y = (evt.clientY - rect.top) * (H / rect.height);
    state.you.y = clamp(y - PAD_H / 2);
  }

  canvas.addEventListener("pointermove", pointerY);
  canvas.addEventListener("pointerdown", (evt) => {
    pointerY(evt);
    if (state.over) reset();
    state.running = true;
  });
  window.addEventListener("keydown", (evt) => {
    if (evt.key === "w" || evt.key === "ArrowUp") { state.keys.up = true; evt.preventDefault(); }
    if (evt.key === "s" || evt.key === "ArrowDown") { state.keys.down = true; evt.preventDefault(); }
  });
  window.addEventListener("keyup", (evt) => {
    if (evt.key === "w" || evt.key === "ArrowUp") state.keys.up = false;
    if (evt.key === "s" || evt.key === "ArrowDown") state.keys.down = false;
  });

  serve(1);
  frame();
})();
