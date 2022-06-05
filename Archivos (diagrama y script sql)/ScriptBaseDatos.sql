USE [Cajero]
GO
/****** Object:  Table [dbo].[Operaciones]    Script Date: 05/06/2022 01:20:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operaciones](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[operacionNombre] [nvarchar](max) NULL,
 CONSTRAINT [PK_Operaciones] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OperacionTarjetas]    Script Date: 05/06/2022 01:20:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OperacionTarjetas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdTarjeta] [int] NOT NULL,
	[IdOperacion] [int] NOT NULL,
	[CreationDate] [datetime2](7) NOT NULL,
	[CantidadDinero] [real] NOT NULL,
 CONSTRAINT [PK_OperacionTarjetas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tarjetas]    Script Date: 05/06/2022 01:20:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tarjetas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NumeroTarjeta] [nvarchar](max) NOT NULL,
	[Pin] [int] NOT NULL,
	[Balance] [real] NOT NULL,
	[FechaVencimiento] [datetime2](7) NOT NULL,
	[Bloqueada] [bit] NOT NULL,
 CONSTRAINT [PK_Tarjetas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Operaciones] ON 
GO
INSERT [dbo].[Operaciones] ([Id], [operacionNombre]) VALUES (1, N'balance')
GO
INSERT [dbo].[Operaciones] ([Id], [operacionNombre]) VALUES (2, N'retiro')
GO
SET IDENTITY_INSERT [dbo].[Operaciones] OFF
GO
SET IDENTITY_INSERT [dbo].[OperacionTarjetas] ON 
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (1, 2, 2, CAST(N'2022-06-03T00:00:00.0000000' AS DateTime2), 5000)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (2, 2, 1, CAST(N'2022-06-05T03:41:44.4970000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (3, 2, 1, CAST(N'2022-06-05T03:42:07.9920000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (4, 2, 2, CAST(N'2022-06-05T03:46:21.6360000' AS DateTime2), 10)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (5, 2, 1, CAST(N'2022-06-05T03:49:53.5470000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (6, 2, 1, CAST(N'2022-06-05T03:50:02.6070000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (7, 2, 2, CAST(N'2022-06-05T03:50:26.4860000' AS DateTime2), 4000)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (8, 2, 1, CAST(N'2022-06-05T03:54:58.5360000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (9, 2, 1, CAST(N'2022-06-05T03:55:10.5430000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (10, 2, 1, CAST(N'2022-06-05T03:55:15.4420000' AS DateTime2), 0)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (11, 2, 2, CAST(N'2022-06-05T03:55:26.2030000' AS DateTime2), 10)
GO
INSERT [dbo].[OperacionTarjetas] ([Id], [IdTarjeta], [IdOperacion], [CreationDate], [CantidadDinero]) VALUES (12, 2, 2, CAST(N'2022-06-05T04:01:06.5910000' AS DateTime2), 1000)
GO
SET IDENTITY_INSERT [dbo].[OperacionTarjetas] OFF
GO
SET IDENTITY_INSERT [dbo].[Tarjetas] ON 
GO
INSERT [dbo].[Tarjetas] ([Id], [NumeroTarjeta], [Pin], [Balance], [FechaVencimiento], [Bloqueada]) VALUES (2, N'4000001234567899', 7722, 54940, CAST(N'2020-12-27T00:00:00.0000000' AS DateTime2), 0)
GO
INSERT [dbo].[Tarjetas] ([Id], [NumeroTarjeta], [Pin], [Balance], [FechaVencimiento], [Bloqueada]) VALUES (3, N'1234001234567899', 4433, 0, CAST(N'2023-01-12T00:00:00.0000000' AS DateTime2), 1)
GO
SET IDENTITY_INSERT [dbo].[Tarjetas] OFF
GO
ALTER TABLE [dbo].[Tarjetas] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Bloqueada]
GO
ALTER TABLE [dbo].[OperacionTarjetas]  WITH CHECK ADD  CONSTRAINT [FK_OperacionTarjetas_Operaciones_IdOperacion] FOREIGN KEY([IdOperacion])
REFERENCES [dbo].[Operaciones] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OperacionTarjetas] CHECK CONSTRAINT [FK_OperacionTarjetas_Operaciones_IdOperacion]
GO
ALTER TABLE [dbo].[OperacionTarjetas]  WITH CHECK ADD  CONSTRAINT [FK_OperacionTarjetas_Tarjetas_IdTarjeta] FOREIGN KEY([IdTarjeta])
REFERENCES [dbo].[Tarjetas] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OperacionTarjetas] CHECK CONSTRAINT [FK_OperacionTarjetas_Tarjetas_IdTarjeta]
GO
