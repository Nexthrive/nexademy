<script setup>
	import { postRequestNonAuth } from "../../../globals";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	import Cookies from "cookies-ts";

	const cookies = new Cookies();
	const router = useRouter();

	const nisRef = ref();
	const passphraseRef = ref("");

	const login = async () => {
		try {
			const loginPayload = {
				nis: nisRef.value,
				passphrase: passphraseRef.value,
			};

			const res = await postRequestNonAuth("/login", loginPayload);

			if (res.data.status === 200 && res.data.message === "Login successful") {
				cookies.set("token", res.data.data, { expires: 7 });
				console.log("Token saved to cookie:");
				router.push({ name: "dashboard" });
			} else {
				console.error("Login failed:", res.data.message);
			}
		} catch (err) {
			console.error("Error during login:", err);
		}
	};
</script>

<template>
	<div class="center-container">
		<div class="sign-up-form">
			<!-- Left (Form Image) -->
			<div class="form-image">
				<img src="../../../assets/form-bg.png" alt="" />
			</div>
			<!-- Right (Form Content) -->
			<form class="form-content" @submit.prevent="login">
				<!-- Form Heading -->
				<div class="form-heading">
					<img src="../../../assets/Nexademy.png" alt="" />
					<h1>Login To your Account</h1>
					<p>Please fill out all the required fields to login your account!</p>
				</div>
				<!-- Input Wrap -->
				<div class="input-wrap">
					<div class="input">
						<input v-model="nisRef" type="number" id="nis" placeholder=" " />
						<div class="label">
							<label for="nis">Nis</label>
						</div>
					</div>
					<div class="input">
						<input
							v-model="passphraseRef"
							type="password"
							id="password"
							placeholder=" "
						/>
						<div class="label">
							<label for="password">Password</label>
						</div>
					</div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped>
	.center-container {
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f1f1f1;
		font-weight: 300;
		padding: 0 24px;
	}

	.sign-up-form {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		max-width: 900px;
		width: 100%;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-radius: 12px;
		background-color: #fff;
	}

	.form-image {
		display: none;
	}

	/* Form Content */
	.form-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 32px;
	}

	/* From Heading */

	.form-heading {
		text-align: center;
		margin-bottom: 32px;
	}

	.form-heading img {
		width: 50px;
		height: auto;
	}

	.form-heading h1 {
		font-size: 2.1rem;
		font-weight: 600;
	}

	p {
		font-size: 14px;
	}

	/* Form fields */

	.input-wrap {
		display: flex;
		flex-direction: column;
		gap: 48px;
		width: 100%;
	}

	.input {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	input {
		width: 100%;
		padding: 8px 0;
		border: none;
		border-bottom: 1px solid #181824;
		transition: 300ms;
		font-size: 14px;
		font-weight: 300;
	}

	input:focus {
		outline: none;
		box-shadow: 0 1px 0 0 #0000ff;
		border-color: #0000ff;
	}

	.label {
		display: flex;
		position: absolute;
		height: 100%;
		align-items: center;
		transition: 300ms ease;
	}

	label {
		display: block;
		font-size: 14px;
		color: #b0b0b0;
	}

	/* Label Effect */
	input:focus + .label,
	input:not(:placeholder-shown) + .label {
		transform: translateY(-27px);
	}

	input:focus + .label label,
	input:not(:placeholder-shown) + .label label {
		font-weight: 500;
		color: initial;
	}

	button {
		padding: 12px 18px;
		border: none;
		align-self: flex-start;
		background-color: #0000ff;
		color: #fff;
		border-radius: 12px;
		transition: 300ms;
	}

	button:hover {
		cursor: pointer;
		background-color: #f1f1f1;
		color: #0000ff;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	/* Desktop Styles */
	@media (min-width: 900px) {
		.sign-up-form {
			flex-direction: row;
		}

		/* Image / Branding */

		.form-image {
			display: block;
			flex-basis: 45%;
			/* background-image: url("./assets/bg-black-square.png"); */
			background-color: #000;
			border-radius: 12px 0 0 12px;
		}

		.form-image img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 12px 0 0 12px;
			opacity: 0.12;
		}

		h1 {
			font-size: 32px;
			font-weight: 500;
		}

		p {
			font-size: 16px;
		}
	}
</style>
