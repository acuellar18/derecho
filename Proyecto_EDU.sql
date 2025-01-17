USE [PROYECTO_EDU]
GO
/****** Object:  Table [dbo].[USUARIO]    Script Date: 16/05/2024 17:14:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[USUARIO](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombreUsuario] [varchar](128) NOT NULL,
	[clave] [varchar](256) NOT NULL,
	[nombreCompleto] [varchar](256) NOT NULL,
	[fechaRegistro] [datetime] NULL DEFAULT (getdate()),
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[USUARIO] ON 

INSERT [dbo].[USUARIO] ([id], [nombreUsuario], [clave], [nombreCompleto], [fechaRegistro]) VALUES (1, N'ECACERES', N'1234', N'EDUARDO DAVID CACERES CANO', CAST(N'2024-05-16 17:05:17.880' AS DateTime))
SET IDENTITY_INSERT [dbo].[USUARIO] OFF
/****** Object:  StoredProcedure [dbo].[insertaUsuarios]    Script Date: 16/05/2024 17:14:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Eduardo Cáceres
-- Create date: 16/05/2024
-- Description:	Inserta nuevos usuarios
-- =============================================
CREATE PROCEDURE [dbo].[insertaUsuarios]
    @nombreUsuario VARCHAR(128),
	@clave VARCHAR(256),
	@nombreCompleto VARCHAR(256)
AS
    BEGIN
        SET NOCOUNT ON;
		DECLARE @mensaje VARCHAR(512);
		BEGIN TRY
			IF EXISTS (SELECT * FROM USUARIO WHERE nombreUsuario = @nombreUsuario )
			BEGIN
				SET @mensaje = 'Usuario ya existe, verifique';
			END
			ELSE
			BEGIN				
			 INSERT INTO [dbo].[USUARIO]
			            (
			              nombreUsuario,
			              clave,
			              nombreCompleto,
			              fechaRegistro
			 		   )
			      VALUES
			            (
			 		     @nombreUsuario,
			 		     @clave,
			 		     @nombreCompleto,
			 		     GETDATE()
			 		   )
			 
			 		   SET @mensaje = 'true';
			END
		END TRY
		BEGIN CATCH
		SET @mensaje = ERROR_MESSAGE();
		END CATCH
		SELECT @mensaje;
END;
GO
/****** Object:  StoredProcedure [dbo].[login]    Script Date: 16/05/2024 17:14:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Eduardo Cáceres
-- Create date: 16/05/2024
-- Description:	Verifica inicio de sesion
-- =============================================
CREATE PROCEDURE [dbo].[login]
    @nombreUsuario VARCHAR(128),
	@clave VARCHAR(256)
AS
    BEGIN
        SET NOCOUNT ON;
		DECLARE @mensaje VARCHAR(512);
		BEGIN TRY
			IF EXISTS (SELECT * FROM USUARIO WHERE nombreUsuario = @nombreUsuario AND clave = @clave)
			BEGIN
				SET @mensaje = 'true';
			END
			ELSE
			BEGIN			 
			     SET @mensaje = 'Usuario o clave incorrecta';
			END
		END TRY
		BEGIN CATCH
		SET @mensaje = ERROR_MESSAGE();
		END CATCH
		SELECT @mensaje;
END;
GO
