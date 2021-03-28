export const buildActionNames = (entityType) => ({
	REQUESTED: `${entityType}_REQUESTED`,
	RESPONDED: `${entityType}_RESPONDED`,
	FAILED: `${entityType}_FAILED`,
	RESET: `${entityType}_RESET`,
	SET: `${entityType}_SET`
});
