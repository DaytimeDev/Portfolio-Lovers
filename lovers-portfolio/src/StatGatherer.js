async function gatherVisitCount(universeId) {
  const response = await fetch(`/api/visits?universeId=${universeId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch visit count: ${response.status}`);
  }

  const data = await response.json();
  return data.visits ?? null;
}

export default gatherVisitCount;
