import { ApiConfig } from "./network/api.config";

export const postVolumeDiscount = async (data: unknown) => {
	return await fetch(`${ApiConfig.BASE_URL}${ApiConfig.VOLUME_DISCOUNT}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
};
