export interface WPTokenDTO {
    accessToken?: string | null;
    expiresIn?: number;
    refreshToken?: string | null;
    scope?: string | null;
    tokenType?: string | null;
}