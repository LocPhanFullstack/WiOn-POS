export interface WPTokenDTO {
  accessToken: string;
  expiresIn?: number;
  tokenType?: string;
  refreshToken?: string;
  scope?: string;
}
