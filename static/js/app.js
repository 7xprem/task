/* TaskFlow — app.js
   Handles toggle-complete buttons on the tasks table.
   The task_detail page has its own inline script for reload behaviour.
*/

document.addEventListener('DOMContentLoaded', () => {

  // ── Toggle-complete buttons (tasks list page) ──────────────────────────────
  document.querySelectorAll('.toggle-btn[data-id]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      try {
        const res  = await fetch(`/tasks/${id}/toggle`, { method: 'POST' });
        const data = await res.json();

        const isDone = data.status === 'done';

        // Update button appearance
        btn.textContent = isDone ? '✓' : '○';
        btn.classList.toggle('toggled', isDone);

        // Update the row appearance
        const row = btn.closest('tr');
        if (row) {
          row.classList.toggle('row-done', isDone);

          // Update status badge in the row
          const statusBadge = row.querySelector('[class*="badge-"]');
          if (statusBadge) {
            statusBadge.className = `badge badge-${data.status}`;
            statusBadge.textContent = data.status.replace('_', ' ');
          }
        }
      } catch (err) {
        console.error('Toggle failed:', err);
      }
    });
  });

  // ── Auto-dismiss flash messages after 4 s ─────────────────────────────────
  document.querySelectorAll('.flash').forEach(el => {
    setTimeout(() => {
      el.style.transition = 'opacity .4s';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 400);
    }, 4000);
  });

});
