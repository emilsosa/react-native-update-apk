/// <reference types="node" />


declare module 'rn-update-apk' {
	export class UpdateAPK {
		constructor(options: any) {
			this.options = options;
		}

		downloadApk(remote: {apkUrl: string}): Promise<void>;
	}

	export function patchSSLProvider(force: boolean, dialogIfRepairable: boolean): Promise<void>;

	export function getInstalledFirstInstallTime(): number;

	export function getInstalledLastUpdateTime(): number;

	export function getInstalledPackageInstaller(): number;

	export function getInstalledSigningInfo(): number;
}
