window.ChessBot = {

  name: "Ahmed's Bot",

  lines: {
    onGameStart:      ["I've been waiting.", "Let's see what you've got.", "Don't hold back."],
    onBotMove:        ["Think carefully.", "Interesting position.", "Your move.", "Take your time.", "Hmm."],
    onBotCaptures:    ["Mine now.", "Thank you for that.", "I'll take that.", "Did you mean to do that?"],
    onPlayerCaptures: ["Enjoy it while it lasts.", "Well played.", "I let you have that.", "Noted."],
    onBotCheck:       ["Check.", "Watch your king.", "Careful now.", "Pay attention."],
    onPlayerCheck:    ["Hmm.", "Nice move.", "You found it.", "Alright, alright."],
    onBotWin:         ["Checkmate. Good game.", "Better luck next time.", "I enjoyed that.", "Come back when you're ready."],
    onPlayerWin:      ["Well played. You earned it.", "I underestimated you.", "Rematch?", "You got me."],
    onDraw:           ["A fair result.", "We're evenly matched.", "I'll take it."],
  },

  pickMove(board, legalMoves, turn, castleRights, enPassantSq, h) {
    // Piece values
    const VALUE = { P: 1, N: 3, B: 3, R: 5, Q: 9, K: 0 };

    // Score a single move with basic heuristics
    function scoreMove(m) {
      let score = 0;
      const piece = board[m.fr][m.fc];
      const target = board[m.tr][m.tc];

      // Capture value
      if (target) score += VALUE[h.type(target)] * 10;

      // En passant capture
      if (m.epCapture) score += 10;

      // Promotion — always queen
      if (h.type(piece) === 'P') {
        const lastRank = h.color(piece) === 'w' ? 0 : 7;
        if (m.tr === lastRank) { m.promo = 'Q'; score += 90; }
      }

      // Prefer moving to center (rows/cols 3-4)
      const centerDist = Math.abs(m.tr - 3.5) + Math.abs(m.tc - 3.5);
      score += (7 - centerDist) * 0.3;

      // Check if this move gives check
      const res = h.applyMove(board, m, castleRights, enPassantSq);
      if (h.isInCheck(res.board, h.opp(turn))) score += 5;

      // Avoid moving into capture (basic — check if destination is attacked)
      if (h.isInCheck(res.board, turn)) score -= 50;

      // Small random tiebreaker so it doesn't feel robotic
      score += Math.random() * 0.5;

      return score;
    }

    // Pick the highest-scoring legal move
    let best = null, bestScore = -Infinity;
    for (const m of legalMoves) {
      const s = scoreMove({...m});
      if (s > bestScore) { bestScore = s; best = {...m}; }
    }

    // Ensure promotion is set on the returned move
    if (h.type(board[best.fr][best.fc]) === 'P') {
      const lastRank = h.color(board[best.fr][best.fc]) === 'w' ? 0 : 7;
      if (best.tr === lastRank) best.promo = 'Q';
    }

    return best;
  },

};
