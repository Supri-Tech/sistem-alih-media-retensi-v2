<script>
  import { format } from "date-fns";
  export let selectedDate = new Date();

  function getStartOfWeek(date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  $: weekStart = getStartOfWeek(new Date(selectedDate));
  $: weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });
</script>

<div class="grid grid-cols-7 gap-1 text-center">
  {#each weekDays as date}
    <div
      class="flex flex-col items-center px-2 py-1 rounded text-sm w-full
        {date.toDateString() === selectedDate.toDateString()
        ? 'bg-emerald-500 text-white font-bold divide-y-2'
        : 'text-gray-800 divide-y-2 divide-white/0'}"
    >
      <span>{format(date, "EEEEE")}</span>
      <span class="mt-2">{format(date, "dd")}</span>
    </div>
  {/each}
</div>
